import { Component, Input, OnInit } from '@angular/core';
import { BlogEntryModel } from '@mod/db/blog.model';

@Component({
  selector: 'ray-blog-entry-small',
  templateUrl: './blog-entry-small.component.html',
  styleUrls: ['./blog-entry-small.component.scss'],
})
export class BlogEntrySmallComponent implements OnInit {
  @Input() public context: BlogEntryModel;
  @Input() public isLast: boolean;
  @Input() public isFirst: boolean;
  @Input() public showImage: boolean;

  ngOnInit(): void {
    if (this.context.title.length > 56) {
      this.context.title = `${this.context.title.slice(0, 60)}...`;
    }

    if (this.context.overview.length > 60) {
      this.context.overview = `${this.context.overview.slice(0, 72)}...`;
    }
  }
}
