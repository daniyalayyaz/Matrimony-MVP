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
    const url = `https://mvp.herokuapp.com/api/user/createprofile`;
    return this.http.post<UserResponse>(url,user);
  }

  Login(user: User): Observable<UserResponse> {
    const url = `https://mvp.herokuapp.com/api/user/Profilelogin`;
    return this.http.post<UserResponse>(url,user);
  }

  onlineUser(gender: Gender): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/Onlineuser`;
    return this.http.post<any>(url, {gender});
  }
  // latest(gender: Gender): Observable<any> {
  //   const url = `https://mvp.herokuapp.com/api/users/latest`;
  //   return this.http.post<any>(url, gender);
  // }
  latest(id:any){
    return this.http.get(`https://mvp.herokuapp.com/api/users/latest/${id}`);
  }
  uploadImage(image:any,userId:any){
    return this.http.post(`https://mvp.herokuapp.com/api/user/ProfileImage/${userId}`,image);
    // return this.http.post(`https://mvp.herokuapp.com/api/user/ProfileImage/${userId}`,image);
  }
  uploadMultipleImage(images:any,userId:any){
    return this.http.put(`https://mvp.herokuapp.com/api/user/imageUpload/${userId}`,images);
    // return this.http.post(`https://mvp.herokuapp.com/api/user/ProfileImage/${userId}`,image);
  }

  AddRemoveFavourite(userId?: string, FavUserId?: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/addToFav`;
    return this.http.post<any>(url,{id: userId, uid: FavUserId});   
  }

  HandleRequest(userId?: string, personId?: string, request?: RequestType): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/sentRequest`;
    return this.http.post<any>(url, {id: userId, rid: personId, request});
  }

  ViewRequest(userId: string, requestId: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/viewRequest`;
    return this.http.post<any>(url,{id: userId, rid: requestId});
  }

  viewAllRequests(userId?: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/viewAllRequest`;
    return this.http.post<any>(url,{rid: userId});
  }
  viewAcceptRequest(userId?: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/viewAcceptRequest`;
    return this.http.post<any>(url,{rid: userId});
  }

  nearBy(city: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/nearBy`;
    return this.http.post<any>(url,{city: city});
  }

  updateUser(id: any,data:any) {
    return this.http.put(`https://mvp.herokuapp.com/api/user/updateProfile/${id}`,data);
  };
  getSingleUser(id:any){
    return this.http.get(`https://mvp.herokuapp.com/api/user/getProfile/${id}`);
  }
  getProfileImage(id:any){
    return this.http.get(`https://mvp.herokuapp.com/api/user/getProfile/${id}`);
  }
  getGallaryImage(id:any):Observable<any>{
    return this.http.get(`https://mvp.herokuapp.com/api/user/showImages/${id}`);
  }
  // updateUser(userId?: string, user?: any): Observable<any> {
  //   const url = `https://mvp.herokuapp.com/api/user/userUpdate`;
  //   return this.http.post<any>(url,{id: userId, ...user});
  // }
  Matchmaking(userId?: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/findMatch`;
    return this.http.post<any>(url,{id: userId, });
  }

  filter(userid:any,max_age:any,min_age:any,country:any,gender:any): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/search`;
    return this.http.post<any>(url,{ userId:userid,max_age:max_age,min_age:min_age,country:country,gender:gender });
  }
  Loginstatusupdate(userId?: string,status?:boolean): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/user/changeLoginStatus`;
    return this.http.post<any>(url,{userId: userId,LoginStatus:status});
  }
  statusupdatenotification(_id:any,latestnews:any,featurestatus:any,numberstatus:any,Profilestatus:any,Activenotification:any): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/user/userUpdate`;
    return this.http.post<any>(url,{id: _id,latestnews:latestnews,featurestatus:featurestatus,numberstatus:numberstatus,Profilestatus:Profilestatus,Activenotification:Activenotification});
  }

  changename(_id:any,name:any): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/user/userUpdate`;
    return this.http.post<any>(url,{id: _id,name:name});
  }



  getfav(userId?: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/viewFav`;
    return this.http.post<any>(url,{id: userId});
  }
  

  Blockuser(id:any,buser:any): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/user/blockUser`;
    return this.http.post<any>(url,{loginId:id,userId:buser});
  }
  getblockuser(userId?: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/user/showBlockedUsers`;
    return this.http.post<any>(url,{id: userId});
  }
  

  unblock(id:any,buser:any): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/user/unblockUser`;
    return this.http.post<any>(url,{userId:id,blockedUserId:buser});
  }
  getchat(senderId?: string,name?:String): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/getAlluserChat`;
    return this.http.post<any>(url,{senderId,name});
  }
  getAllChat(id?: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/getAllChat`;
    return this.http.post<any>(url,{id});
  }

  postChat(id?: string,name?: string,senderId?:string,profile?:string,receiverId?:string, message?: string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/postchat`;
    return this.http.post<any>(url,{id, name,senderId, receiverId, message,profile });
  }
  letschat( senderId?:string,receiverId?:string): Observable<any> {
    const url = `https://mvp.herokuapp.com/api/users/getChatGroup`;
    return this.http.post<any>(url,{senderId, receiverId});
  }
  async signwithgmail(){
const provider=new GoogleAuthProvider();
const credential=await this.angulrfire.signInWithPopup(provider);
return credential;
  }
  getPackage() {
    return this.http.get(environment.apiBaseUrl + '/user/getPackage');
  };
  decrimentsInConnects(id:any,body:any){
    // return this.http.put(environment.apiBaseUrl + '/user/connectsDecriment',id)
    return this.http.post(`https://mvp.herokuapp.com/api/user/connectsDecrement/${id}`,body)
  };
  // whatsappchat(b:any,){
  //   return this.http.post(environment.apiBaseUrl + '/user/whatsapp',b);
  // }
  getPromotion() {
    return this.http.get(environment.apiBaseUrl + '/admin/promotionget');
  };
  userSentDeleteAccountrequestToAdmin(id:any,active:any){
    return this.http.put(`https://mvp.herokuapp.com/api/user/updateProfile/${id}`,{active})
  }
  reportUser(data: any){
    const url = `https://mvp.herokuapp.com/api/admin/generateReport`;
    return this.http.post(url,data);
  }
  lockGallery(data:any){
    const url = `https://mvp.herokuapp.com/api/user/lockGallery`;
    return this.http.post(url,data);
  }
  notificationAdd(reciverId:any,data:any,view:any,description:any){
    const url = `https://mvp.herokuapp.com/api/nothicationAdd/${reciverId}`;
    return this.http.post(url,{data,view,description});
  }
  
  showNotification(id:any) {
    // return this.http.get(environment.apiBaseUrl + '/nothicationShow/${}');
    const url = `https://mvp.herokuapp.com/api/nothicationShow/${id}`;
    return this.http.get(url);
  };
  showNotificationById(id:any){
    const url = `https://mvp.herokuapp.com/api/nothicationShowById/${id}`;
    return this.http.get(url);

  }
  nothicationUpdateMany(id:any){
    const url = `https://mvp.herokuapp.com/api/nothicationUpdateMany/${id}`;
    return this.http.get(url);
  }


  // dropdownServices
  getReligion() {
    return this.http.get(environment.apiBaseUrl + '/religion');
  };
  getSect() {
    return this.http.get(environment.apiBaseUrl + '/sect');
  };
  getMotherLanguage() {
    return this.http.get(environment.apiBaseUrl + '/motherLanguage');
  };
  getCast() {
    return this.http.get(environment.apiBaseUrl + '/cast');
  };
  getLooks() {
    return this.http.get(environment.apiBaseUrl + '/looks');
  };
  getBuild() {
    return this.http.get(environment.apiBaseUrl + '/build');
  };
  getComplexion() {
    return this.http.get(environment.apiBaseUrl + '/complexion')
  };
  getCountry() {
    return this.http.get(environment.apiBaseUrl + '/country');
  };
  deleteGalleryImage(id: any, imageId: any){
    return this.http.post(`https://mvp.herokuapp.com/api/user/deleteGalleryImage/${id}`,imageId)
  }
}

