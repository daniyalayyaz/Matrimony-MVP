import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Gender } from './enums/genders.enum';
import { RequestType } from './enums/request.enum';
import { User, UserResponse } from './models/user.modal';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth  } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient,private auths :AngularFirestore,private angulrfire:AngularFireAuth) { }

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

  filter(userid:any,max_age:any,min_age:any,country:any,gender:any): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/search`;
    return this.http.post<any>(url,{ userId:userid,max_age:max_age,min_age:min_age,country:country,gender:gender });
  }
  Loginstatusupdate(userId?: string,status?:boolean): Observable<any> {
    const url = `${environment.apiBaseUrl}/user/changeLoginStatus`;
    return this.http.post<any>(url,{userId: userId,LoginStatus:status});
  }



  getfav(userId?: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/viewFav`;
    return this.http.post<any>(url,{id: userId});
  }
  

  Blockuser(id:any,buser:any): Observable<any> {
    const url = `${environment.apiBaseUrl}/user/blockUser`;
    return this.http.post<any>(url,{loginId:id,userId:buser});
  }
  getblockuser(userId?: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/user/showBlockedUsers`;
    return this.http.post<any>(url,{id: userId});
  }
  

  unblock(id:any,buser:any): Observable<any> {
    const url = `${environment.apiBaseUrl}/user/unblockUser`;
    return this.http.post<any>(url,{userId:id,blockedUserId:buser});
  }
  getchat(senderId?: string,name?:String): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/getAlluserChat`;
    return this.http.post<any>(url,{senderId,name});
  }
  getAllChat(id?: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/getAllChat`;
    return this.http.post<any>(url,{id});
  }

  postChat(id?: string,name?: string,senderId?:string,receiverId?:string, message?: string): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/postchat`;
    return this.http.post<any>(url,{id, name,senderId, receiverId, message });
  }
  letschat( senderId?:string,receiverId?:string): Observable<any> {
    const url = `${environment.apiBaseUrl}/users/getChatGroup`;
    return this.http.post<any>(url,{senderId, receiverId});
  }
  async signwithgmail(){
const provider=new GoogleAuthProvider();
const credential=await this.angulrfire.signInWithPopup(provider);
return credential;
  }

}

