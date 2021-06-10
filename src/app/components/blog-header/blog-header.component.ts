import { Component, Input, OnInit } from '@angular/core';
import { BlogEntryModel, BlogModel } from '@mod/db/blog.model';
import { BlogService } from '@ser/blog.service';

@Component({
  selector: 'ray-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
})
export class BlogHeaderComponent {
  @Input() public headerTitle: string;
  @Input() public headerDescription: string;
}
