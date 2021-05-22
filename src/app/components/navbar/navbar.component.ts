import { Component } from '@angular/core';
import { NavigationArrayModel } from '@mod/navigation.model';

@Component({
  selector: 'ray-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public openMenu: boolean;
  public invertedColors: boolean;
  public links: NavigationArrayModel = [
    {
      path: '',
      text: 'Home',
    },
    {
      path: '/#about-me',
      text: 'About Me',
    },
    {
      path: '/blog',
      text: 'Blog',
    },
    {
      path: '/portfolio',
      text: 'Portfolio',
    },
    {
      path: '/#contact',
      text: 'Contact',
    },
  ];
}
