import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceClass } from '@app/classes/service.class';
import { BasicInfoModel } from '@mod/db/basic-info.model';

@Injectable({
  providedIn: 'root',
})
export class BasicInfoService extends ServiceClass {
  public get(): Observable<BasicInfoModel> {
    const contextPath = '%2Fbasic-info.yml';

    return this.service
      .get(contextPath)
      .pipe(map((data) => data as BasicInfoModel));
  }
}
