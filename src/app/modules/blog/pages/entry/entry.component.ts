import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { MetaDataService } from '@ser/metatag.service';
import { BlogService } from '@ser/blog.service';
import { BlogEntryModel } from '@mod/db/blog.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { BlogPageClass } from '@app/classes/blog-page.class';

@Component({
  selector: 'ray-blog',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class BlogEntryComponent extends BlogPageClass {
  @ViewChild('contentMarker', { static: false }) contentMarker: ElementRef;

  private sideContentTop = 0;
  public entry: BlogEntryModel;
  public entryUrl: string;
  public sideDisplay: boolean;

  constructor(
    public service: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    readonly metaDataService: MetaDataService
  ) {
    super(service);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    if (this.sideContentTop) {
      this.sideDisplay = window.pageYOffset > this.sideContentTop;
    }
  }

  async onInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      if (params.id) {
        // loading true
        await this.initEntityData(params.id);
        // loading false
      }
    });
  }

  private async initEntityData(id: string): Promise<void> {
    const entry = await this.service.getEntry(id).toPromise();

    if (!entry) {
      await this.router.navigateByUrl('404');
    }

    this.entryUrl = `${environment.urls.app}/blog/${id}`;
    this.entry = new BlogEntryModel(entry);
    this.metaDataService.setCustomMetaData(
      this.entry.title,
      this.entry.overview
    );

    this.initSideContentTop();
  }

  private initSideContentTop(): void {
    if (this.contentMarker) {
      const bound = this.contentMarker.nativeElement.getBoundingClientRect();
      this.sideContentTop = bound.top;
    } else {
      setTimeout(() => this.initSideContentTop(), 300);
    }
  }
}
