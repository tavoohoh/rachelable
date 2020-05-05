import { Component } from '@angular/core';
import { HomeDB } from '@app/db';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ButtonModel } from '../../models/button.model';

@Component({
  selector: 'ray-generic-page',
  template: ``
})
export class GenericComponent {
  public pageContext: any;
  public lang: string;
  public callToAction: ButtonModel;

  constructor(
    private translateService: TranslateService
  ) { }

  public pageOnInit(callToActionConfig: ButtonModel): void {
    this.callToAction = callToActionConfig;
    this.setContext(this.translateService.currentLang);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setContext(event.lang);
    });
  }

  public setContext(lang: string): void {
    this.lang = lang;
    this.callToAction.text = this.pageContext.callToAction.buttonText[this.lang];
  }

}