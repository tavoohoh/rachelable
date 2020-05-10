import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LockerService {

  constructor(
    private http: HttpClient
  ) { }

  public onSendcontactForm(
    body: {
      name: string,
      org: string,
      message: string,
      email: string
    }
  ): Observable<{ isEmailSend: boolean }> {
    const url = 'https://us-central1-rachelableapp.cloudfunctions.net/contact';
    return this.http.post<{ isEmailSend: boolean }>(url, body);
  }
}
