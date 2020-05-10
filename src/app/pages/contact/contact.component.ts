import { Component, OnInit } from '@angular/core';
import { Validators, AbstractControl } from '@angular/forms';
import { GenericComponent } from '../generic/generic.component';
import { ContactDB } from '@app/db';
import { ButtonType } from '@app/enums';

@Component({
  selector: 'ray-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent extends GenericComponent implements OnInit {
  public submitted = false;
  public contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    org: [''],
    message: ['', Validators.required],
    email: ['', Validators.required]
  });

  ngOnInit(): void {
    this.pageContext = ContactDB;
    const callToActionConfig = {
      text: '',
      action: '/contact',
      type: ButtonType.LINK
    };
    this.pageOnInit(callToActionConfig);
  }

  get formControls(): { [key: string]: AbstractControl; } {
    return this.contactForm.controls;
  }

  public onSubmitContactForm(): void {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.lockerService.onSendcontactForm(this.contactForm.value)
      .subscribe(() => {
        console.log('sent');
        this.contactForm.reset();
      }, error => console.error('Error at ContactComponent.onSubmitContactForm:', error))
  }

}
