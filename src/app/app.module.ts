import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from '@comp/navbar/navbar.component';
import { FooterComponent } from '@comp/footer/footer.component';
import { HomeComponent } from '@page/home/home.component';
import { ContactComponent } from '@page/contact/contact.component';
import { AboutComponent } from '@page/about/about.component';
import { NotFoundComponent } from '@page/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
