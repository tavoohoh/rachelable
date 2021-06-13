import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/app.service';
import { LoaderService } from '@ser/loader.service';

@Component({
  selector: 'ray-root',
  template: `
    <ray-loader *ngIf="showLoader"></ray-loader>
    <div class="main" *ngIf="contentIsReady">
      <router-outlet></router-outlet>
      <ray-footer></ray-footer>
    </div>
  `,
  styles: [],
})
export class AppComponent implements OnInit {
  public contentIsReady = false;
  public showLoader = true;

  constructor(
    private service: AppService,
    private loader: LoaderService
  ) {}

  async ngOnInit(): Promise<void> {
    this.loader.asObservable().subscribe(value => {
      this.showLoader = value;
    });

    await this.service.initApp();
    this.contentIsReady = true;
  }
}
