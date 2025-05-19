import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface NavItem {
  id: string;
  icon: string;
  label: string;
  route: string;
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
    { id: 'brain', icon: 'brain', label: 'Modelos', route: '/modelos' },
    { id: 'robot', icon: 'robot', label: 'Agentes', route: '/agentes' },
    { id: 'behavior', icon: 'behavior', label: 'Comportamiento', route: '/comportamiento' },
    { id: 'tool', icon: 'tool', label: 'Herramientas', route: '/herramientas' }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const found = this.navItems.find(item => event.urlAfterRedirects.startsWith(item.route));
        if (found) {
          this.selectedItem = found.id;
        }
      }
    });
  }

  selectItem(itemId: string): void {
    this.selectedItem = itemId;
    const selectedNavItem = this.navItems.find(item => item.id === itemId);
    if (selectedNavItem) {
      this.router.navigate([selectedNavItem.route]);
    }
  }
  
  logout(): void {
    console.log('Logout clicked');
    // Aquí se implementaría la lógica de cierre de sesión
  }
} 