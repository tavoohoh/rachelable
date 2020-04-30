import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { ButtonModel } from '@app/models/button.model';
import { ButtonType } from '@app/enums';

@Component({
  selector: 'ray-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.sass']
})
export class CallToActionComponent implements OnChanges {
  @Input() public content: string;
  @Input() public button: ButtonModel;

  public buttonType = ButtonType;

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      if (changes.content) {
        this.content = changes.content.currentValue;
      }

      if (changes.button) {
        this.button = changes.button.currentValue;
      }
    } 
  }
}
