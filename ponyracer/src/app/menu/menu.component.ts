import { Component } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor() {}

  navbarCollapsed = true;

  toggleNavbar(): void {
    this.navbarCollapsed === true ? (this.navbarCollapsed = false) : (this.navbarCollapsed = true);
  }
}
