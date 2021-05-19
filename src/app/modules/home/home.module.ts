import {NgModule} from "@angular/core";
import {HomeComponent} from "@app/modules/home/home.component";
import {CoverHomeComponent} from "@app/modules/home/components/cover/cover.component";
import {AboutMeHomeComponent} from "@app/modules/home/components/about-me/about-me.component";
import {PortfolioHomeComponent} from "@app/modules/home/components/portfolio/portfolio-home.component";
import {BlogHomeComponent} from "@app/modules/home/components/blog/blog.component";

@NgModule({
  declarations: [HomeComponent, CoverHomeComponent, AboutMeHomeComponent, PortfolioHomeComponent, BlogHomeComponent],
  imports: []
})
export class HomeModule {}
