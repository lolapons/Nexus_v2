import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
  standalone: false
})
export class ProgressBarComponent implements OnInit {
  @Input() variant: 'default' | 'fill' = 'default';
  @Input() height: number = 8; // Altura de la barra en píxeles

  constructor() { }

  ngOnInit(): void {
  }
} 