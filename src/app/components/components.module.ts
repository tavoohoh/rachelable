import { NgModule } from '@angular/core';
import { NavbarComponent } from '@com/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '@com/loader/loader.component';
import { FooterComponent } from '@com/footer/footer.component';

const COMPONENTS = [NavbarComponent, LoaderComponent];

@NgModule({
  declarations: [...COMPONENTS, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS, FooterComponent],
})
export class ComponentsModule {}
