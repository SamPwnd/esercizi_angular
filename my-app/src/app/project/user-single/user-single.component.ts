import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() user!: User;
  @Output() deleteButton = new EventEmitter<User>();
  @Output() userEventToList = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedButton(user: User) {
    this.deleteButton.emit(user);
  }

  sendUserDetails(user: User) {
    this.userEventToList.emit(user);
  }
  
}
