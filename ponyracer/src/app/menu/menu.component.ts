import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor() {}

  noUnsuedLifeCycles = true;
  navbarCollapsed = true;

  ngOnInit(): void {
    this.noUnsuedLifeCycles = true;
  }

  toggleNavbar(): void {
    this.navbarCollapsed === true ? (this.navbarCollapsed = false) : (this.navbarCollapsed = true);
  }
}
