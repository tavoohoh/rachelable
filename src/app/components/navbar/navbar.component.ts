import { Component, OnInit } from '@angular/core';
import { NavigationArrayModel } from '@mode/index';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'ray-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  public invertedColors: boolean;
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.invertedColors = this.setLayout(this.router.url.split('/').reverse()[0]);

    this.router.events.subscribe((navigateEvent: any) => {
      if (navigateEvent instanceof NavigationEnd) {
        this.invertedColors = this.setLayout(navigateEvent.url.split('/').reverse()[0]);
      }
    });
  }

  private setLayout(currentUrl: string): boolean {
    if (currentUrl === 'contact') {
      return true;
    }

    this.invertedColors = false;
  }

}
