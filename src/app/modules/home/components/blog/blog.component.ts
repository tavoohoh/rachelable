import { Component } from '@angular/core';
import { BlogEntryModel } from '@mod/db/blog.model';
import { BlogPageClass } from '@app/classes/blog-page.class';
import { BlogEntryStatusEnum } from '@enu/blog-entry-status.enum';

@Component({
  selector: 'ray-home-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogHomeComponent extends BlogPageClass {
  public entries: BlogEntryModel[];
  public lastEntry: BlogEntryModel;

  async onInit(): Promise<void> {
    this.context = await this.service.getContext();

    const entries = [
      ...this.context.entries[BlogEntryStatusEnum.TO_READ],
      ...this.context.entries[BlogEntryStatusEnum.IN_PROGRESS],
      ...this.context.entries[BlogEntryStatusEnum.DONE],
    ];

    this.lastEntry = entries[0];
    this.entries = entries.slice(1);
  }
}
