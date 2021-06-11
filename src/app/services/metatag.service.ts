import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PageName } from '@mod/meta-data.model';
import { META_DATA_CONSTANT } from '@con/meta-data.constant';

@Injectable({
  providedIn: 'root',
})
export class MetaDataService {
  constructor(private title: Title, private metadata: Meta) {}

  public setMetaData(pageName: PageName): void {
    this.setCustomMetaData(
      META_DATA_CONSTANT[pageName].title,
      META_DATA_CONSTANT[pageName].description
    );
  }

  public setCustomMetaData(title: string, description: string): void {
    this.title.setTitle(title);
    this.metadata.updateTag({
      name: 'description',
      content: description,
    });
  }
}
