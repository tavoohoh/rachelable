import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceClass } from '@app/classes/service.class';
import { AboutMeModel } from '@mod/db/about-me.model';

@Injectable({
  providedIn: 'root',
})
export class AboutMeService extends ServiceClass {
  public get(): Observable<AboutMeModel> {
    const contextPath = '%2Fabout-me.yml';

    return this.service.get(contextPath).pipe(
      map((data: AboutMeModel) => {
        data.links = JSON.parse(data.links.toString());

        return data as AboutMeModel;
      })
    );
  }
}
