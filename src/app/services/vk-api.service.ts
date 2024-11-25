import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VkApiService {
  private apiUrl = environment.apiUrl;
  private accessToken = environment.accessToken;
  private apiVersion = environment.apiVersion;

  constructor(private http: HttpClient) {}

  getUserInfo(userId: string): Observable<any> {
    const url = `${this.apiUrl}/users.get?user_ids=${userId}&access_token=${this.accessToken}&v=${this.apiVersion}`;
    return this.http.get(url);
  }

  getUserFriends(userId: string): Observable<any> {
    const url = `${this.apiUrl}/friends.get?user_id=${userId}&access_token=${this.accessToken}&v=${this.apiVersion}`;
    return this.http.get(url);
  }
}
