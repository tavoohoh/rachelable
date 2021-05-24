import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { AppDataModel } from '@mod/app-data.model';

@Component({
  selector: 'ray-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public context: AppDataModel;

  constructor(public service: AppService) {}

  ngOnInit(): void {
    this.context = this.service.appData;
  }
}
