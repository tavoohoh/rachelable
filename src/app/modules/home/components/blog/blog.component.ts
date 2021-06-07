import { Component, OnInit } from '@angular/core';
import { BlogModel } from '@mod/db/blog.model';
import { BlogService } from '@ser/blog.service';

@Component({
  selector: 'ray-home-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogHomeComponent implements OnInit {
  public blogs: BlogModel;

  constructor(
    private service: BlogService
  ) {}

  ngOnInit(): void {
    this.service
      .getMain()
      .subscribe(data => {
        console.log(data);
      });
  }
}
