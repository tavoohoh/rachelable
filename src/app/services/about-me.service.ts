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
    const contextPath =
      '%2Fabout-me.yml?alt=media&token=0e59b789-03eb-470e-bd76-4a76b3d97199';

    // about-me.yml?alt=media&token=78081898-5bfe-4e12-87b9-38db2d842fd7

    return this.service.get(contextPath).pipe(
      map((data: AboutMeModel) => {
        data.links = JSON.parse(data.links.toString());

        return data as AboutMeModel;
      })
    );
  }
}
