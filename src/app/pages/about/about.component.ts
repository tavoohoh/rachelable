import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '@page/generic/generic.component';
import { AboutDB } from '@app/db';
import { ButtonType } from '@app/enums';

@Component({
  selector: 'ray-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent extends GenericComponent implements OnInit {
  
  ngOnInit(): void {
    this.pageContext = AboutDB;
    const callToActionConfig = {
      text: '',
      action: '/contact',
      type: ButtonType.LINK
    };
    this.pageOnInit(callToActionConfig);
  }

}
