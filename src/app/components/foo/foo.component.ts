import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-foo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './foo.component.html',
  styleUrl: './foo.component.less'
})
export class FooComponent {

}
