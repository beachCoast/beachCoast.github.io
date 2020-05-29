import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrls: ['./navbar-header.component.scss']
})
export class NavbarHeaderComponent implements OnInit {
  faBars = faBars;

  constructor() { }

  ngOnInit(): void {
  }

  collapseMenu() {
    const element = document.getElementById('navbar-toggle');

    if (element.getAttribute('aria-expanded') === 'true') {
      element.click();
    }
  }
}
