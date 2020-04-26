import { Component } from '@angular/core';

@Component({
  selector: 'ray-root',
  template: `
    <ray-navbar></ray-navbar>
    <router-outlet></router-outlet>
    <ray-footer></ray-footer>
  `,
  styles: []
})
export class AppComponent {

}
