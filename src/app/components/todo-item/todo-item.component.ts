import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.less'
})
export class TodoItemComponent {
  text!: boolean;
  description!: string;
  done!: boolean;
  

  setState() {
    this.done = !this.done;
  }

}
