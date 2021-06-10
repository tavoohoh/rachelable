import { Component, Input } from '@angular/core';
import { NavigationArrayModel } from '@mod/navigation.model';

@Component({
  selector: 'ray-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() public invertedColors: boolean;
  public openMenu = false;
  public links: NavigationArrayModel = [
    {
      path: '',
      text: 'Home',
    },
    {
      path: '',
      text: 'About Me',
      fragment: 'about_me',
      disableActiveState: true,
    },
    {
      path: '/blog',
      text: 'Blog',
    },
    // {
    //   path: '/portfolio',
    //   text: 'Portfolio',
    // },
    {
      path: '',
      text: 'Contact',
      fragment: 'contact',
      disableActiveState: true,
    },
  ];
}
