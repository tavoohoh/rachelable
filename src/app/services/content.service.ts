import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import yaml from 'js-yaml';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  public get(contextPath: string): Observable<{ [key: string]: any }> {
    const url = `${environment.urls.content}${contextPath}?alt=media`;
    const options: object = {
      responseType: 'application/x-yaml',
    };

    return this.http.get<any>(url, options).pipe(
      map((data) => {
        const list = [];

        yaml.loadAll(data, (doc) => list.push(doc));

        return {
          ...list[0],
          content: list[1],
        };
      })
    );
  }
}
