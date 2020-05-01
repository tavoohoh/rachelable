import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';

import { NavbarComponent } from '@comp/navbar/navbar.component';
import { FooterComponent } from '@comp/footer/footer.component';
import { CallToActionComponent } from '@comp/call-to-action/call-to-action.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from '@page/home/home.component';
import { ContactComponent } from '@page/contact/contact.component';
import { AboutComponent } from '@page/about/about.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about-me',
    component: AboutComponent
  },
  {
    path: 'about', 
    redirectTo: '/about-me'
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**', 
    redirectTo: '/home'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CallToActionComponent,
    CarouselComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
