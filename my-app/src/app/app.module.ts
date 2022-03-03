import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserContainerComponent } from './project/user-container/user-container.component';
import { UserListComponent } from './project/user-list/user-list.component';
import { UserSingleComponent } from './project/user-single/user-single.component';
import { UserDetailComponent } from './project/user-detail/user-detail.component';
import { OrderContainerComponent } from './project/order-container/order-container.component';
import { OrderListComponent } from './project/order-list/order-list.component';
import { OrderSingleComponent } from './project/order-single/order-single.component';
import { OrderDetailComponent } from './project/order-detail/order-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UserContainerComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
