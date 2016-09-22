import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {FirebaseAuth, AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  todoList: FirebaseListObservable<any>;

  
  constructor(public af: AngularFire, public auth: FirebaseAuth, public nav: NavController, private alertCtrl: AlertController) {}
 
  public createTodo() {
    this.editTodo(null, true);
  }
 
  public openTodo(todo) {
    this.editTodo(todo, false);
  }
 
  public removeTodo(item) {
    this.todoList.remove(item);
  }
 
  editTodo(todo, isNew: boolean) {
    let prompt = this.alertCtrl.create({
      title: isNew ? 'Create Todo' : 'Update Todo',
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: todo ? todo.todo : ''
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: todo ? 'Update' : 'Add',
          handler: data => {
            if (isNew) {
              this.todoList.push({'todo': data.title});
            } else {
              this.todoList.update(todo, {todo: data.title});
            }
          }
        }
      ]
    });
    prompt.present();
  }
 
  ngOnInit() {
    this.auth.subscribe((data) => {
      if (data) {
        this.todoList = this.af.database.list('/todoList');
      }
    })
  }
}
