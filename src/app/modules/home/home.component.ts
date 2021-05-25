import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { AppDataModel } from '@mod/app-data.model';
import { MetaDataService } from '@ser/metatag.service';
import { PageName } from '@mod/meta-data.model';

@Component({
  selector: 'ray-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public context: AppDataModel;

  constructor(
    private service: AppService,
    private metaDataService: MetaDataService
  ) {
    metaDataService.setMetaData(PageName.HOME);
  }

  ngOnInit(): void {
    this.context = this.service.appData;
  }
}
