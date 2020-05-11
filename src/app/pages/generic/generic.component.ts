import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ButtonModel } from '../../models/button.model';
import { FormBuilder } from '@angular/forms';
import { LockerService } from '@app/services/locker.service';

@Component({
  selector: 'ray-generic-page',
  template: ``
})
export class GenericComponent {
  public pageContext: any;
  public lang: string;
  public callToAction: ButtonModel;

  constructor(
    private translateService: TranslateService,
    public formBuilder: FormBuilder,
    public lockerService: LockerService
  ) { }

  public pageOnInit(callToActionConfig?: ButtonModel): void {
    if (callToActionConfig) {
      this.callToAction = callToActionConfig;
    }

    this.setContext(this.translateService.currentLang);
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setContext(event.lang);
    });
  }

  public setContext(lang: string): void {
    this.lang = lang;

    if (this.callToAction) {
      this.callToAction.text = this.pageContext.callToAction.buttonText[this.lang];
    }
  }

}