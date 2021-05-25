import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { BasicInfoModel } from '@mod/db/basic-info.model';

@Component({
  selector: 'ray-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public currentYear = new Date().getFullYear();
  public context: BasicInfoModel;

  constructor(private service: AppService) {
  }

  ngOnInit(): void {
    this.service.appDataAsObservable().subscribe(data => {
      if (data.basicInfo) {
        this.context = data.basicInfo;
      }
    });
  }
}
