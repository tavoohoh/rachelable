import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';

@Component({
  selector: 'ray-root',
  template: `
    <ray-loader *ngIf="showLoader"></ray-loader>
    <div class="main" *ngIf="!loading">
      <router-outlet></router-outlet>
      <ray-footer></ray-footer>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  public loading = true;
  public showLoader = true;

  constructor(private service: AppService) {}

  async ngOnInit(): Promise<void> {
    await this.service.initApp();
    this.loading = false;

    setTimeout(() => (this.showLoader = false), 1300);
  }
}
