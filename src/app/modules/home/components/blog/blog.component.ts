import { Component, OnInit } from '@angular/core';
import { BlogEntryModel, BlogModel } from '@mod/db/blog.model';
import { BlogService } from '@ser/blog.service';

@Component({
  selector: 'ray-home-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogHomeComponent implements OnInit {
  public context: BlogModel;
  public entries: BlogEntryModel[];
  public lastEntry: BlogEntryModel;

  constructor(private service: BlogService) {}

  async ngOnInit(): Promise<void> {
    this.context = await this.service.getMain().toPromise();

    const entries = await this.service.getEntries(1, 3, this.context.blogs);

    this.lastEntry = entries[0];
    this.entries = entries.slice(1);
  }
}
