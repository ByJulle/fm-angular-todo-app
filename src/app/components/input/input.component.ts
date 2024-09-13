import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

export enum HTMLInputType {
  text = 'text',
  number = 'number',
  email = 'email',
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() type: HTMLInputType = HTMLInputType.text;
  @Input() formController!: FormControl;

  @Output() onKeyPress = new EventEmitter();
}
