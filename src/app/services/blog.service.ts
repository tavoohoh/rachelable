import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {BlogEntryModel, BlogModel} from "@mod/db/blog.model";

const CONTEXT_URL = 'blog';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<BlogModel> {
    const url = `${environment.apiUrl}/${CONTEXT_URL}`;

    return this.http.get<BlogModel>(url);
  }

  public getEntries(): Observable<BlogEntryModel[]> {
    const url = `${environment.apiUrl}/${CONTEXT_URL}/entries`;

    return this.http.get<BlogEntryModel[]>(url);
  }

  public getEntry(id: string): Observable<BlogEntryModel> {
    const url = `${environment.apiUrl}/${CONTEXT_URL}/entries/${id}`;

    return this.http.get<BlogEntryModel>(url);
  }
}
