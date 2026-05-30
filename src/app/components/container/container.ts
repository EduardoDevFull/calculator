import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResultComponent } from '../result/result';
import { ButtonComponent } from '../button/button';
import { Calculate } from '../../services/calculate';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    ResultComponent,
    ButtonComponent
  ],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class CalculatorComponent {
  private expr = '';
  private calculateService = inject(Calculate);
  display = signal('0');

  buttons = [
    'C','DEL','/','*',
    '7','8','9','-',
    '4','5','6','+',
    '1','2','3','=',
    '0','.','',''
  ];

  onButton(label: string) {
    if (!label) return;
    if (label === 'C') {
      this.expr = '';
      this.display.set('0');
      return;
    }
    if (label === 'DEL') {
      this.expr = this.expr.slice(0, -1);
      this.display.set(this.expr || '0');
      return;
    }
    if (label === '=') {
      try {
        const result = this.calculateService.evaluate(this.expr);
        this.expr = result;
        this.display.set(result);
      } catch {
        this.expr = '';
        this.display.set('Error');
      }
      return;
    }
    this.expr += label;
    this.display.set(this.expr);
  }

}
