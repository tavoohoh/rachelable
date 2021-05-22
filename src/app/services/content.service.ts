import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import * as showdown from 'showdown'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  public get(contextPath: string): Observable<{ [key: string]: any }> {
    const url = `${environment.urls.content}${contextPath}?alt=media`
    const options: object = {
      responseType: 'application/x-yaml',
    }

    return this.http.get<any>(url, options).pipe(
      map((data) => {
        return this.convert(data.toString())
      })
    )
  }

  private convert(data: string): object {
    const yml = data.toString().split('---')
    const attrStr = yml[0].split('\n')
    let json = {}

    attrStr.forEach((s) => {
      const attr = s.split(': ')

      if (attr[0] && attr[1]) {
        json = {
          ...json,
          [attr[0]]: attr[1],
        }
      }
    })

    if (yml[1]) {
      const md = yml[1]
      const converter = new showdown.Converter()
      const content = converter.makeHtml(md)

      return {
        ...json,
        content,
      }
    } else {
      return json
    }
  }
}
