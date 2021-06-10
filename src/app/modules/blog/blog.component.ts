import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { MetaDataService } from '@ser/metatag.service';
import { PageName } from '@mod/meta-data.model';
import { BlogService } from '@ser/blog.service';
import { BlogEntryModel, BlogModel } from '@mod/db/blog.model';

@Component({
  selector: 'ray-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public context: BlogModel;
  public entries: BlogEntryModel[];

  constructor(
    private service: BlogService,
    readonly metaDataService: MetaDataService
  ) {
    metaDataService.setMetaData(PageName.BLOG);
  }

  async ngOnInit(): Promise<void> {
    this.context = await this.service.getMain().toPromise();
    this.entries = await this.service.getEntries(1, 3, this.context.blogs);
  }

}
