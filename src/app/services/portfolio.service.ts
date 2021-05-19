import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {PortfolioEntryModel, PortfolioModel} from "@mod/db/portfolio.model";

const CONTEXT_URL = 'portfolio';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<PortfolioModel> {
    const url = `${environment.apiUrl}/${CONTEXT_URL}`;

    return this.http.get<PortfolioModel>(url);
  }

  public getEntries(): Observable<PortfolioEntryModel[]> {
    const url = `${environment.apiUrl}/${CONTEXT_URL}/entries`;

    return this.http.get<PortfolioEntryModel[]>(url);
  }

  public getEntry(id: string): Observable<PortfolioEntryModel> {
    const url = `${environment.apiUrl}/${CONTEXT_URL}/entries/${id}`;

    return this.http.get<PortfolioEntryModel>(url);
  }
}
