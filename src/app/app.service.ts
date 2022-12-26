import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gender } from './enums/genders.enum';
import { RequestType } from './enums/request.enum';
import { User, UserResponse } from './models/user.modal';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  createProfile(user: User): Observable<UserResponse> {
    const url = `${environment.apiBaseUrl}/user/createprofile`;
    return this.http.post<UserResponse>(url,user);
  }

  onlineUser(gender: Gender): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/Onlineuser`;
    return this.http.post<any>(url, gender);
  }

  AddRemoveFavourite(userId?: string, FavUserId?: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/addToFav`;
    return this.http.post<any>(url,{id: userId, uid: FavUserId});
  }

  HandleRequest(userId?: string, personId?: string, request?: RequestType): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/sentRequest`;
    return this.http.post<any>(url, {id: userId, rid: personId, request});
  }

  ViewRequest(userId: string, requestId: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/viewRequest`;
    return this.http.post<any>(url,{id: userId, rid: requestId});
  }
}
