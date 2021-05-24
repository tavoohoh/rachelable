import { Component } from '@angular/core';
import { AppService } from '@app/app.service';

@Component({
  selector: 'ray-root',
  template: '<div class="main"><router-outlet></router-outlet></div>',
  styles: [],
})
export class AppComponent {
  constructor(private service: AppService) {
    this.service.initApp();
  }
}
