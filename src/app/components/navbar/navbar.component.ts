import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { NavigationArrayModel } from '@mod/navigation.model';

@Component({
  selector: 'ray-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  public openMenu: boolean;
  public invertedColors: boolean;
  public currentLanguage: string;
  public links: NavigationArrayModel = [
    {
      path: '/home',
      text: 'PAGES.HOME.TITLE',
    },
    {
      path: '/entry',
      text: 'PAGES.ABOUT.TITLE',
    },
    {
      path: '/contact',
      text: 'PAGES.CONTACT.TITLE',
    },
  ];

  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.currentLanguage = this.translateService.currentLang;
    this.invertedColors = this.setLayout(
      this.router.url.split('/').reverse()[0]
    );
    this.router.events.subscribe((navigateEvent: any) => {
      if (navigateEvent instanceof NavigationEnd) {
        this.invertedColors = this.setLayout(
          navigateEvent.url.split('/').reverse()[0]
        );
      }
    });
  }

  public toggleMenu(): void {
    this.openMenu = !this.openMenu;
  }

  private setLayout(currentUrl: string): boolean {
    if (currentUrl === 'contact') {
      return true;
    }

    this.invertedColors = false;
  }

  public toogleLang() {
    this.toggleMenu();
    this.translateService
      .use(this.currentLanguage === 'en' ? 'es' : 'en')
      .subscribe(
        () => (this.currentLanguage = this.translateService.currentLang)
      );
  }
}
