import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '@page/generic/generic.component';
import { HomeDB } from '@app/db';
import { ButtonType } from '@app/enums';

@Component({
  selector: 'ray-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent extends GenericComponent implements OnInit {
  
  ngOnInit(): void {
    this.pageContext = HomeDB;
    const callToActionConfig = {
      text: '',
      action: '/about-me',
      type: ButtonType.LINK
    };
    this.pageOnInit(callToActionConfig);
  }

}
