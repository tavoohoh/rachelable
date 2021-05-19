import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {BasicInfoModel} from "@mod/db/basic-info.model";

const CONTEXT_URL = 'basic-info';

@Injectable({
  providedIn: 'root'
})
export class BasicInfoService {

  constructor(
    private http: HttpClient
  ) { }

  public get(): Observable<BasicInfoModel> {
    const url = `${environment.apiUrl}/${CONTEXT_URL}`;

    return this.http.get<BasicInfoModel>(url);
  }
}
