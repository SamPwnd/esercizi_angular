import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gender, Role, User } from 'src/app/models/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() userDetail: any;
  @Output() closeDetail = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeDetailComponent(){
    this.closeDetail.emit();
  }

}
