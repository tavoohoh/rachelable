import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

import { MetaDataService } from '@ser/metatag.service';
import { BlogService } from '@ser/blog.service';
import { BlogEntryModel } from '@mod/db/blog.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';
import { BlogPageClass } from '@app/classes/blog-page.class';
import { BlogEntryStatusEnum } from '@enu/blog-entry-status.enum';

@Component({
  selector: 'ray-blog',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class BlogEntryComponent extends BlogPageClass {
  @ViewChild('contentMarker', { static: false }) contentMarker: ElementRef;
  @ViewChild('startedMarker', { static: false }) startedMarker: ElementRef;
  @ViewChild('endedMarker', { static: false }) endedMarker: ElementRef;

  private sideContentTop = 0;
  private readStarted: boolean;
  private readEnded: boolean;
  public entry: BlogEntryModel;
  public entryUrl: string;
  public sideDisplay: boolean;
  public blogEntryStatus = BlogEntryStatusEnum;

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

    if (!this.readStarted && this.startedMarker) {
      this.readStarted = this.readMarker(
        this.startedMarker.nativeElement.getBoundingClientRect().top
      );
    }

    if (!this.readEnded && this.endedMarker) {
      this.readEnded = this.readMarker(
        this.endedMarker.nativeElement.getBoundingClientRect().bottom
      );
    }
  }

  private readMarker(bound: number): boolean {
    if (window.pageYOffset > bound) {
      let status = BlogEntryStatusEnum.IN_PROGRESS;

      if (this.entry.status === BlogEntryStatusEnum.IN_PROGRESS) {
        status = BlogEntryStatusEnum.DONE;
      }

      this.service.updateEntryStatus(this.entry.id, this.entry.status, status);
      this.entry.updateStatus(status);

      return true;
    }

    return false;
  }

  async onInit(): Promise<void> {
    this.route.params.subscribe(async (params) => {
      if (params.id) {
        window.scroll(0, 0);
        await this.initEntityData(params.id);
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

    this.readStarted = this.entry.status === BlogEntryStatusEnum.IN_PROGRESS;
    this.readEnded = this.entry.status === BlogEntryStatusEnum.DONE;

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

  public showSideContentEntry(
    entryProgressType: BlogEntryStatusEnum,
    entryIndex: number
  ): boolean {
    return (
      this.context.entries[entryProgressType][entryIndex].id !== this.entry.id
    );
  }

  public showSideContentProgress(
    entryProgressType: BlogEntryStatusEnum
  ): boolean {
    if (this.context.entries[entryProgressType].length === 1) {
      return (
        this.context.entries[entryProgressType].length === 1 &&
        this.showSideContentEntry(entryProgressType, 0)
      );
    }

    return this.context.entries[entryProgressType].length > 0;
  }
}
