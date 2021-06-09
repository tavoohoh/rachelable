import { Component, Input } from '@angular/core';
import { BlogAuthor } from '@mod/db/blog.model';

@Component({
  selector: 'ray-blog-author-card',
  templateUrl: './blog-author-card.component.html',
  styleUrls: ['./blog-author-card.component.scss'],
})
export class BlogAuthorCardComponent {
  @Input() public author: BlogAuthor;
  @Input() public date: string;
  @Input() public estimatedReadTime: string;
}
