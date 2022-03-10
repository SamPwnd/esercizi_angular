import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userDetail: User[] = [];
  storeUserDetail(detail: any){
    this.userDetail = detail;
  }

  closeDetails(){
    this.userDetail = [];
    console.log(this.userDetail);
  }
}
