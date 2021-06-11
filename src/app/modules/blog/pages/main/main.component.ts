import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '@ser/metatag.service';
import { PageName } from '@mod/meta-data.model';
import { BlogService } from '@ser/blog.service';
import {
  BlogEntriesProgress,
  BlogModel,
} from '@mod/db/blog.model';

@Component({
  selector: 'ray-blog',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class BlogMainComponent implements OnInit {
  public context: BlogModel;
  public entries: BlogEntriesProgress;

  constructor(
    private service: BlogService,
    readonly metaDataService: MetaDataService
  ) {
    metaDataService.setMetaData(PageName.BLOG);
  }

  async ngOnInit(): Promise<void> {
    this.context = await this.service.getMain().toPromise();
    this.entries = await this.service.getEntriesWithProgress(
      this.context.blogs
    );

    this.entries.inProgress.push(this.entries.toRead[2]);
    this.entries.inProgress.push(this.entries.toRead[0]);
    this.entries.done.push(this.entries.toRead[1]);
    this.entries.done.push(this.entries.toRead[2]);
  }

}
