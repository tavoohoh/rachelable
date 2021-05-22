import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from '@app/modules/home/home.component';
import { CoverHomeComponent } from '@app/modules/home/components/cover/cover.component';
import { AboutMeHomeComponent } from '@app/modules/home/components/about-me/about-me.component';
import { PortfolioHomeComponent } from '@app/modules/home/components/portfolio/portfolio-home.component';
import { BlogHomeComponent } from '@app/modules/home/components/blog/blog.component';
import { ComponentsModule } from '@com/components.module';

const ROUTES = [
  {
    path: '',
    component: HomeComponent,
  },
];

const COMPONENTS = [
  CoverHomeComponent,
  AboutMeHomeComponent,
  PortfolioHomeComponent,
  BlogHomeComponent,
];

@NgModule({
  declarations: [HomeComponent, ...COMPONENTS],
  imports: [
    RouterModule.forChild(ROUTES),
    CommonModule,
    ComponentsModule
  ],
  exports: [RouterModule],
})
export class HomeModule {}
