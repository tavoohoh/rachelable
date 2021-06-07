import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceClass } from '@app/classes/service.class';
import { BasicInfoModel } from '@mod/db/basic-info.model';
import { BlogModel } from '@mod/db/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends ServiceClass {
  public getMain(): Observable<BlogModel> {
    const contextPath = '%2Fblog%2F_main.yml';

    return this.service.get(contextPath).pipe(map((data) => data as BlogModel));
  }

  public getEntry(blogUrl: string): Observable<BlogModel> {
    const contextPath = `%2Fblog%2F${blogUrl}`;

    return this.service.get(contextPath).pipe(map((data) => data as BlogModel));
  }
}
