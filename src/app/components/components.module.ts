import { NgModule } from '@angular/core';
import { NavbarComponent } from '@com/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  NavbarComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...COMPONENTS],
})
export class ComponentsModule {}
