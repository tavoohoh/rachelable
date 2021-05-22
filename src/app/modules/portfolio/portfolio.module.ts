import { NgModule } from '@angular/core'
import { PortfolioComponent } from '@app/modules/portfolio/portfolio.component'
import { EntryPortfolioComponent } from '@app/modules/portfolio/components/entry/entry.component'

@NgModule({
  declarations: [PortfolioComponent, EntryPortfolioComponent],
  imports: [],
})
export class PortfolioModule {}
