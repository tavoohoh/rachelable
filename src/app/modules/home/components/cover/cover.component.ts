import {Component, Input} from '@angular/core';
import {BasicInfoModel} from "@mod/db/basic-info.model";

@Component({
  selector: 'ray-home-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverHomeComponent {
  @Input() context: BasicInfoModel;
}
