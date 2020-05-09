import { Component, OnInit } from '@angular/core';
import { GenericComponent } from '../generic/generic.component';
import { ContactDB } from '@app/db';
import { ButtonType } from '@app/enums';

@Component({
  selector: 'ray-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent extends GenericComponent implements OnInit {
  
  ngOnInit(): void {
    this.pageContext = ContactDB;
    const callToActionConfig = {
      text: '',
      action: '/contact',
      type: ButtonType.LINK
    };
    this.pageOnInit(callToActionConfig);
  }

}
