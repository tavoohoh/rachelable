import { Directive } from '@angular/core'
import { Observable } from 'rxjs'
import { ContentService } from '@ser/content.service'

@Directive()
export class ServiceClass {
  constructor(public service: ContentService) {}

  public get(): Observable<unknown> {
    return null
  }
}
