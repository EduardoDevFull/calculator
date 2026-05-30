import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResultComponent } from './components/result/result';
import { CalculatorComponent } from './components/container/container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('calculator');
}
