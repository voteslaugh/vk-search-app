import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { VKApiResponse } from '../models/profile-response'; // Импорт интерфейса

@Injectable({
  providedIn: 'root'
})
export class VkApiService {

  constructor(private http: HttpClient) {}

  getUserFriends(userId: string): Observable<any> {
    const params = {
      user_id: userId,
      access_token: environment.accessToken,
      v: environment.apiVersion
    };
    return this.http.get(`${environment.apiUrl}/friends.get`, { params });
  }

  getUsersInfo(userIds: string): Observable<VKApiResponse> {
    const params = {
      user_ids: userIds,
      access_token: environment.accessToken,
      v: environment.apiVersion,
      fields: 'first_name,last_name,bdate,city,sex,domain,photo_100'
    };
    return this.http.get<VKApiResponse>(`${environment.apiUrl}/users.get`, { params });
  }
}
