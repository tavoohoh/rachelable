import { NgModule } from '@angular/core';
import { EntryBlogComponent } from '@app/modules/blog/components/entry/entry.component';
import { BlogComponent } from '@app/modules/blog/blog.component';
import { ComponentsModule } from '@com/components.module';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
  },
];

@NgModule({
  declarations: [BlogComponent, EntryBlogComponent],
  imports: [
    ComponentsModule,
    RouterModule.forRoot(routes),
    CommonModule,
  ],
})
export class BlogModule {}
