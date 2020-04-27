import { Component } from '@angular/core';
import { NavigationArrayModel } from '@mode/index';

@Component({
  selector: 'ray-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
  public links: NavigationArrayModel = [
    {
      path: '/home',
      text: 'PAGES.HOME.TITLE'
    },
    {
      path: '/about-me',
      text: 'PAGES.ABOUT.TITLE'
    },
    {
      path: '/contact',
      text: 'PAGES.CONTACT.TITLE'
    }
  ];
  
}
