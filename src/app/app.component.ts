import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ray-root',
  template: `
    <ray-navbar></ray-navbar>
    <div class="page">
      <router-outlet></router-outlet>
    </div>
    <ray-footer></ray-footer>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    const defualtLang = 'en';
    const lang = localStorage.getItem('@ray/lang') || defualtLang;
    this.translateService.setDefaultLang(defualtLang);
    this.translateService.use(lang);
  }
}
