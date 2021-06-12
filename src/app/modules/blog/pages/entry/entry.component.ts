import { Component, OnInit } from '@angular/core';
import { MetaDataService } from '@ser/metatag.service';
import { BlogService } from '@ser/blog.service';
import { BlogEntryModel } from '@mod/db/blog.model';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ray-blog',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
})
export class BlogEntryComponent implements OnInit {
  public entry: BlogEntryModel;
  public entryUrl: string;

  constructor(
    private service: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    readonly metaDataService: MetaDataService
  ) {}

  async ngOnInit(): Promise<void> {
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
  }
}