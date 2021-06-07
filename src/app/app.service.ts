import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppDataModel } from '@mod/app-data.model';
import { BasicInfoService } from '@ser/basic-info.service';
import { AboutMeService } from '@ser/about-me.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private $appData: BehaviorSubject<AppDataModel> =
    new BehaviorSubject<AppDataModel>(null);

  constructor(
    private basicInfoService: BasicInfoService,
    private aboutMeService: AboutMeService
  ) {}

  public async initApp(): Promise<AppDataModel> {
    const basicInfo = await this.basicInfoService.get().toPromise();

    const about = await this.aboutMeService.get().toPromise();

    this.appData = {
      basicInfo,
      about,
    };

    return this.appData;
  }

  public appDataAsObservable(): Observable<AppDataModel> {
    return this.$appData.asObservable();
  }

  public get appData(): AppDataModel {
    return this.$appData.value;
  }

  public set appData(data: AppDataModel) {
    this.$appData.next(data);
  }
}
