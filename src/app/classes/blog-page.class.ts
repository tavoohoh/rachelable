import { Directive, OnInit } from '@angular/core';
import { BlogContext } from '@mod/db/blog.model';
import { BlogService } from '@ser/blog.service';

@Directive()
export class BlogPageClass implements OnInit {
  public context: BlogContext;

  constructor(public service: BlogService) {}

  async ngOnInit(): Promise<void> {
    await this.getContext();
    await this.onInit();
  }

  async getContext(): Promise<void> {
    this.context = await this.service.getContext();
  }

  public async onInit(): Promise<void> {}
}
