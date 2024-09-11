import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

interface ToDo {
  id: string;
  task: string;
  status: string;
}
@Component({
  selector: 'task',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export default class TaskComponent {
  // Component props
  @Input() id: string = '';
  @Input() task: string = '';
  @Input() status: string = '';

  // Internal logic variables
  isChecked: boolean = false;

  // Lifecycle
  ngOnInit() {
    this.isChecked = this.status === 'completed';
  }

  // Emitters
  @Output() updateStatus = new EventEmitter<string>();
}
