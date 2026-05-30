
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './result.html',
  styleUrl: './result.scss',
})
export class ResultComponent {
  @Input() value = '0';
}
