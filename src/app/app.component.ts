import { Component } from '@angular/core';
import { Todo } from './Todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos : Todo[]= [];
  newTodo : string;

  saveToDo(){
    if(this.newTodo){
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = false;
      this.todos.push(todo);
      this.newTodo = '';
    }
    else{
      alert('Please enter Todo');
    }
  }

  removeTodo(id:number){
    this.todos = this.todos.filter((v,i)=> i !==id)
  }

  doneTodo(id:number){
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

}


