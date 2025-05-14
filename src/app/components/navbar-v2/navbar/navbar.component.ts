import { Component } from '@angular/core';

interface NavItem {
  id: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'navbar-v2',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedItem: string = 'brain';
  
  navItems: NavItem[] = [
    { id: 'robot', icon: 'robot', label: 'Agentes' },
    { id: 'brain', icon: 'brain', label: 'Modelos' },
    { id: 'behavior', icon: 'behavior', label: 'Comportamiento' },
    { id: 'tool', icon: 'tool', label: 'Herramientas' }
  ];

  selectItem(itemId: string): void {
    this.selectedItem = itemId;
  }
}