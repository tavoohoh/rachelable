import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';

@Component({
  selector: 'ray-root',
  template: `
    <ray-loader *ngIf="loading"></ray-loader>
    <div class="main" *ngIf="!loading">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  public loading = true;

  constructor(private service: AppService) {}

  async ngOnInit(): Promise<void> {
    await this.service.initApp();

    setTimeout(() => this.loading = false, 1000);
  }
}
