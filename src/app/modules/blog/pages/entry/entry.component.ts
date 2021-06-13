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
  @ViewChild('blogEntryCover', { static: false }) blogEntryCover: ElementRef;

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
    const id = this.route.snapshot.paramMap.get('id');
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
    this.excludeCurrentEntryFromContext();
    // loading false
  }

  private excludeCurrentEntryFromContext(): void {
    let entryIndex = this.context.entries.toRead.findIndex(
      (o) => o.id === this.entry.id
    );

    if (this.context.entries.toRead[entryIndex]) {
      this.context.entries.toRead.splice(entryIndex, 1);
    } else {
      entryIndex = this.context.entries.inProgress.findIndex(
        (o) => o.id === this.entry.id
      );

      if (this.context.entries.inProgress[entryIndex]) {
        this.context.entries.inProgress.splice(entryIndex, 1);
      }
    }
  }

  private initSideContentTop(): void {
    if (this.blogEntryCover) {
      const bound = this.blogEntryCover.nativeElement.getBoundingClientRect();
      this.sideContentTop = bound.top;
    } else {
      setTimeout(() => this.initSideContentTop(), 300);
    }
  }
}
