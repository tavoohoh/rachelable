import { BasicInfoModel } from '@mod/db/basic-info.model';
import { AboutMeModel } from '@mod/db/about-me.model';

export interface AppDataModel {
  basicInfo: BasicInfoModel;
  about: AboutMeModel;
}
