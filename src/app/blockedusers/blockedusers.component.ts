import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blockedusers',
  templateUrl: './blockedusers.component.html',
  styleUrls: ['./blockedusers.component.css']
})
export class BlockedusersComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  gotoInterests() {
    this.router.navigate(['Interests']);
  }
}
