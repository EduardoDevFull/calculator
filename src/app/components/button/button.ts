import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  @Input() label = '';
  @Output() press = new EventEmitter<string>();

  onClick() {
    this.press.emit(this.label);
  }

  get isOperator() {
    return ['/', '*', '-', '+', '='].includes(this.label);
  }
}
