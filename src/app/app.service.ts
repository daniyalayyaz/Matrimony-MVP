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

  Login(user: User): Observable<UserResponse> {
    const url = `${environment.apiBaseUrl}/user/Profilelogin`;
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

  viewAllRequests(userId?: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/viewAllRequest`;
    return this.http.post<any>(url,{rid: userId});
  }

  nearBy(city: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/nearBy`;
    return this.http.post<any>(url,{city: city});
  }

  updateUser(userId?: string, user?: any): Observable<any> {
    const url = `${environment.apiBaseUrl}/user/userUpdate`;
    return this.http.post<any>(url,{id: userId, ...user});
  }
  Matchmaking(userId?: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/findMatch`;
    return this.http.post<any>(url,{id: userId, });
  }

  filter(user: User): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/search`;
    return this.http.post<any>(url,{id: user });
  }
  Loginstatusupdate(userId?: string,status?:boolean): Observable<any> {
    const url = `${environment.apiBaseUrl}/user/changeLoginStatus`;
    return this.http.post<any>(url,{userId: userId,LoginStatus:status});
  }
}
