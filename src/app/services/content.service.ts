import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import yaml from 'js-yaml';
import { environment } from '../../environments/environment';
import { LoaderService } from '@ser/loader.service';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(
    private http: HttpClient,
    private loader: LoaderService
  ) {}

  public get(contextPath: string): Observable<{ [key: string]: any }> {
    this.loader.add();
    const url = `${environment.urls.content}${contextPath}?alt=media&token=`;
    const options: object = {
      responseType: 'application/x-yaml',
    };

    return this.http.get<any>(url, options).pipe(
      map((data) => {
        const list = [];

        yaml.loadAll(data, (doc) => list.push(doc));

        this.loader.remove();
        return {
          ...list[0],
          content: list[1],
        };
      })
    );
  }
}
