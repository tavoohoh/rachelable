import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppDataModel } from '@mod/app-data.model';
import { ContentService } from '@ser/content.service';
import { BasicInfoModel } from '@mod/db/basic-info.model';
import { AboutMeModel } from '@mod/db/about-me.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private $appData: BehaviorSubject<AppDataModel> =
    new BehaviorSubject<AppDataModel>(null);

  constructor(private contentService: ContentService) {}

  public async initApp(): Promise<AppDataModel> {
    const basicInfo = await this.contentService.get(
      '%2Fbasic-info.yml?alt=media&token='
    ).pipe(map((data) => data as BasicInfoModel)).toPromise();

    const about = await this.contentService.get(
      '%2Fabout-me.yml?alt=media&token='
    ).pipe(map((data) => data as AboutMeModel)).toPromise();

    this.$appData.next({
      basicInfo,
      about
    });

    console.log(this.$appData.value);

    return this.$appData.value;
  }
}
