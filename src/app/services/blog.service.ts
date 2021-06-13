import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServiceClass } from '@app/classes/service.class';
import { BasicInfoModel } from '@mod/db/basic-info.model';
import {
  BlogContext,
  BlogEntriesProgress,
  BlogEntryModel,
  BlogModel,
} from '@mod/db/blog.model';
import { BlogEntryStatusEnum } from '@enu/blog-entry-status.enum';

@Injectable({
  providedIn: 'root',
})
export class BlogService extends ServiceClass {
  public $blogContext = new BehaviorSubject<BlogContext>(null);

  public async initBlogContext(): Promise<void> {
    const main = await this.getMain().toPromise();
    const entries = await this.getEntriesWithProgress(main.blogs);

    this.$blogContext.next({
      main,
      entries,
    });
  }

  /**
   * current entry progress
   */
  public async getContext(): Promise<BlogContext> {
    if (!this.$blogContext.value) {
      await this.initBlogContext();
    }

    return this.$blogContext.value;
  }

  public getEntry(url: string): Observable<BlogEntryModel> {
    const contextPath = `%2Fblog%2F${url}.yml`;

    return this.service
      .get(contextPath)
      .pipe(map((data) => data as BlogEntryModel));
  }

  private getMain(): Observable<BlogModel> {
    const contextPath = '%2Fblog%2F_main.yml';

    return this.service.get(contextPath).pipe(map((data) => data as BlogModel));
  }

  private async getEntries(
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
        const entryData = await this.getEntry(link).toPromise();
        const entry = new BlogEntryModel(entryData);

        entries.push(entry);
      })
    );

    return entries;
  }

  private async getEntriesWithProgress(
    links: string[]
  ): Promise<BlogEntriesProgress> {
    const entries: BlogEntriesProgress = {
      toRead: [],
      inProgress: [],
      done: [],
    };

    await Promise.all(
      links.map(async (link) => {
        const entryData = await this.getEntry(link).toPromise();
        const entry = new BlogEntryModel(entryData);

        switch (entry.status) {
          case BlogEntryStatusEnum.TO_READ:
            entries.toRead.push(entry);
            break;
          case BlogEntryStatusEnum.IN_PROGRESS:
            entries.inProgress.push(entry);
            break;
          case BlogEntryStatusEnum.DONE:
            entries.done.push(entry);
            break;
        }
      })
    );

    return entries;
  }
}
