import { Component } from '@angular/core';

interface ModelOption {
  label: string;
  value: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {
  title = 'Nexus_v2';
}
