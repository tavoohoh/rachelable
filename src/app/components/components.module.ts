import { NgModule } from '@angular/core';
import { NavbarComponent } from '@com/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '@com/loader/loader.component';
import { FooterComponent } from '@com/footer/footer.component';
import { BlogEntrySmallComponent } from '@com/blog-entry-small/blog-entry-small.component';

const COMPONENTS = [NavbarComponent, LoaderComponent, BlogEntrySmallComponent];

@NgModule({
  declarations: [...COMPONENTS, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS, FooterComponent],
})
export class ComponentsModule {}
