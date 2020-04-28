import { Component, OnInit } from '@angular/core';
import { HomeDB } from '@app/db';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'ray-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  public pageContext = HomeDB;
  public lang: string;

  constructor(
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.lang = event.lang;
    });
  }

}
