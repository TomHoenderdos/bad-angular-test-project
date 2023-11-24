import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.less'
})
export class TodoListComponent {
  allItems!: Todo[];
  
  filter: "all" | "active" | "done" = "all";
  
  ngOnInit(): void {
    this.allItems = [
      new Todo(Guid.create(), "Example Todo", false)
    ]
  }

  get todos() {
    if (this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter((item: { done: boolean; }) =>
      this.filter === "done" ? item.done : !item.done
    );
  }
  

}
