import { NgModule } from '@angular/core';
import { EntryBlogComponent } from '@app/modules/blog/components/entry/entry.component';
import { BlogComponent } from '@app/modules/blog/blog.component';

@NgModule({
  declarations: [BlogComponent, EntryBlogComponent],
  imports: [],
})
export class BlogModule {}
