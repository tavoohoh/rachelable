import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '@ser/metatag.service';
import { PageName } from '@mod/meta-data.model';
import { BlogService } from '@ser/blog.service';
import { BlogEntriesProgress, BlogModel } from '@mod/db/blog.model';
import { BlogPageClass } from '@app/classes/blog-page.class';

@Component({
  selector: 'ray-blog',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class BlogMainComponent extends BlogPageClass {
  public entries: BlogEntriesProgress;

  constructor(
    public service: BlogService,
    readonly metaDataService: MetaDataService
  ) {
    super(service);

    metaDataService.setMetaData(PageName.BLOG);
  }

  async onInit(): Promise<void> {
    this.context = await this.service.getContext();
    this.entries = this.context.entries;

    this.entries.inProgress.push(this.entries.toRead[2]);
    this.entries.inProgress.push(this.entries.toRead[0]);
    this.entries.done.push(this.entries.toRead[1]);
    this.entries.done.push(this.entries.toRead[2]);
  }
}
