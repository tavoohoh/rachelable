import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageName } from '@mod/meta-data.model';
import { META_DATA_CONSTANT } from '@con/meta-data.constant';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  constructor(
    private title: Title,
    private metadata: Meta
  ) { }

  public setMetaData(pageName: PageName): void {
    this.title.setTitle(META_DATA_CONSTANT[pageName].title);
    this.metadata.updateTag({
      name: 'description',
      content: META_DATA_CONSTANT[pageName].description
    });
  }
}
