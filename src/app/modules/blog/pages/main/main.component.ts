import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { MetaDataService } from '@ser/metatag.service';
import { BlogService } from '@ser/blog.service';
import { PageName } from '@mod/meta-data.model';
import { BlogEntriesProgress, BlogEntryModel } from '@mod/db/blog.model';
import { BlogPageClass } from '@app/classes/blog-page.class';
import { BlogEntryStatusEnum } from '@enu/blog-entry-status.enum';

@Component({
  selector: 'ray-blog',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class BlogMainComponent extends BlogPageClass {
  public entries: BlogEntriesProgress;
  public entryStatus = BlogEntryStatusEnum;
  public disableEvents = false;

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
  }

  public checkIsLast(i: number, list: BlogEntryModel[]): boolean {
    return i === list.length - 1;
  }

  public handleDrop(
    event: CdkDragDrop<BlogEntryModel[]>,
    status: BlogEntryStatusEnum
  ): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      event.container.data[0].updateStatus(status);
    }

    this.disableEvents = false;
  }
}
