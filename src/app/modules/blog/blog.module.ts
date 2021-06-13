import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogMainComponent } from '@app/modules/blog/pages/main/main.component';
import { ComponentsModule } from '@com/components.module';
import { RouterModule, Routes } from '@angular/router';
import { BlogEntryComponent } from '@app/modules/blog/pages/entry/entry.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

const routes: Routes = [
  {
    path: '',
    component: BlogMainComponent,
  },
  {
    path: ':id',
    component: BlogEntryComponent,
  },
];

@NgModule({
  declarations: [BlogMainComponent, BlogEntryComponent],
  imports: [
    ComponentsModule,
    RouterModule.forChild(routes),
    CommonModule,
    DragDropModule,
  ],
})
export class BlogModule {}
