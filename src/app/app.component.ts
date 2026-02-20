import { Component } from '@angular/core';
import { Todo } from './models/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'caplin_todo';

  todos: Todo[] = [
    { id: 1, title: 'Go to gym', status: 'pending', category: 'personal' },
    { id: 2, title: 'Project work', status: 'complete', category: 'work' },
  ];
  newToDo: Partial<Todo> = {
    title: '',
    status: 'pending',
    category: 'personal'
  }
  selectedCategory: 'personal' | 'work' | 'all'= 'all';
  addToDo(){
    if(!this.newToDo.title?.trim()) return

    const newItem:Todo = {
      id: this.todos.length+1,
      title: this.newToDo.title!,
      status: 'pending',
      category: this.newToDo.category as 'personal' | 'work'
    }
    this.todos.push(newItem);
    this.newToDo ={ title: '', category: 'personal', status: "pending"}
  }
  get filteredToDos(): Todo[]{
    debugger
    if(this.selectedCategory === 'all') return this.todos;
    return this.todos.filter(t => t.category === this.selectedCategory)
  }
  toggleStatus(todo: Todo){
    todo.status = todo.status === 'pending' ? 'complete' : 'pending'
  }
  deleteToDo(id:number){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}