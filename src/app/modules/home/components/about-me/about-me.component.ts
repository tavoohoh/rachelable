import { Component, Input } from '@angular/core';
import { AboutMeModel } from '@mod/db/about-me.model';

@Component({
  selector: 'ray-home-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeHomeComponent {
  @Input() context: AboutMeModel;
}
