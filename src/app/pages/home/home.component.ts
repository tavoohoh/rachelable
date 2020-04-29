import { Component, OnInit } from '@angular/core';
import { HomeDB } from '@app/db';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ButtonType } from '@app/enums';

@Component({
  selector: 'ray-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public pageContext = HomeDB;
  public lang: string;
  public callToActionAbout = {
    text: '',
    action: '/about-me',
    type: ButtonType.LINK
  };

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.setContext(this.translateService.currentLang);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setContext(event.lang);
    });
  }

  private setContext(lang: string): void {
    this.lang = lang;
    this.callToActionAbout.text = this.pageContext.callToAction.buttonText[this.lang];
  }

}
