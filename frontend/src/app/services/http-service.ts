import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  get(url: string): Promise<Contact[]> {
    return this.http.get<Contact[]>(this.baseUrl + url).toPromise();
  }

  post(url: string, obj: any): Promise<Contact> {
    return this.http.post<Contact>(this.baseUrl + url, obj).toPromise();
  }

  put(url: string, obj: any): Promise<Contact> {
    return this.http.put<Contact>(this.baseUrl + url, obj).toPromise();
  }

  patch(url: string, obj: any): Promise<Contact> {
    return this.http.patch<Contact>(this.baseUrl + url, obj).toPromise();
  }

  delete(url: string): Promise<any> {
    return this.http.delete<Contact>(this.baseUrl + url).toPromise();
  }
}
