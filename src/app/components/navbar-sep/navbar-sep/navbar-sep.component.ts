import { Component } from '@angular/core';

interface NavItem {
  id: string;
  icon: string;
  label: string;
}

@Component({
  selector: 'navbar-sep',
  standalone: false,
  templateUrl: './navbar-sep.component.html',
  styleUrls: ['./navbar-sep.component.css']
})
export class NavbarSepComponent {
  selectedItem: string = 'brain';
  
  navItems: NavItem[] = [
    { id: 'robot', icon: 'robot', label: 'Agentes' },
    { id: 'brain', icon: 'brain', label: 'Modelos' },
    { id: 'behavior', icon: 'behavior', label: 'Comportamiento' },
    { id: 'tool', icon: 'tool', label: 'Herramientas' }
  ];

  selectItem(itemId: string): void {
    this.selectedItem = itemId;
    console.log('Item seleccionado:', itemId);
  }
  
  logout(): void {
    console.log('Logout clicked');
    // Aquí se implementaría la lógica de cierre de sesión
  }
} 