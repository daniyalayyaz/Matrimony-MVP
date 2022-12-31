import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';
import { takeUntil } from 'rxjs';
import { UnsubscribeHandelr } from '../helpers/unsubscribe-handler';
import { LocalStorageItem } from '../helpers/localStorageItem.enum';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent extends UnsubscribeHandelr implements OnInit {
id="";

chatList={members:[],messages:[{message:"",name:"",sender:""}],_id:""};

  constructor(private route: ActivatedRoute,private appService: AppService,private router: Router) { 
    super();
    this.route.paramMap.subscribe((params: any) => {
      this.id = params?.get("id") || "";
      console.log(this.id)
      this.appService.getAllChat(this.id).pipe(
        takeUntil(this.Unsubscribe$))
        .subscribe((users) => {
     
          this.chatList= users;
          console.log(this.chatList);
          console.log(users);
        })
  })

  }
  ngOnInit(): void {
    let loggedUser = localStorage.getItem(LocalStorageItem.LOGGED_USER);
    if(loggedUser) {
      this.CurrentUser = JSON.parse(loggedUser);
    }
  }
  chat:string;
  postChat(){
    this.appService.postChat(this.chatList._id||"56cb91bdc3464f14678934ca",this.CurrentUser.name,this.CurrentUser._id,this.chatList.members[1]||localStorage.getItem("id"),this.chat).pipe(
      takeUntil(this.Unsubscribe$))
      .subscribe((users) => {
    if(users._id){
      this.route.paramMap.subscribe((params: any) => {
        this.id = params?.get("id") || "";
        console.log(this.id)
        this.appService.getAllChat(this.id).pipe(
          takeUntil(this.Unsubscribe$))
          .subscribe((users) => {
       
            this.chatList= users;
            this.chat="";
          })
      })
    }
    else{
        this.router.navigate(['Chat/'+users._id]);  
        this.chat="";
      
    }

    
      })
}}
