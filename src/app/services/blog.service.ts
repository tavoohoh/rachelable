import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceClass } from '@app/classes/service.class';
import { BasicInfoModel } from '@mod/db/basic-info.model';
import { BlogModel } from '@mod/db/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BasicInfoService extends ServiceClass {
  public getMain(): Observable<BlogModel> {
    const contextPath = 'blogs%2F_main.yml?alt=media&token=';

    return this.service.get(contextPath).pipe(map((data) => data as BlogModel));
  }
}
