import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceClass } from '@app/classes/service.class';
import { BasicInfoModel } from '@mod/db/basic-info.model';
import { BlogEntryModel, BlogModel } from '@mod/db/blog.model';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends ServiceClass {
  public getMain(): Observable<BlogModel> {
    const contextPath = '%2Fblog%2F_main.yml';

    return this.service.get(contextPath).pipe(map((data) => data as BlogModel));
  }

  public getEntry(url: string): Observable<BlogEntryModel> {
    const contextPath = `%2Fblog%2F${url}.yml`;

    return this.service
      .get(contextPath)
      .pipe(map((data) => data as BlogEntryModel));
  }

  public async getEntries(
    page: number,
    limit: number,
    links: string[]
  ): Promise<BlogEntryModel[]> {
    const entries = [];

    const start = (page - 1) * limit;
    const end = start + limit;

    links = links.slice(start, end);

    await Promise.all(
      links.map(async (link) => {
        const entry = await this.getEntry(link).toPromise();

        entries.push(entry);
      })
    );

    return entries;
  }
}
