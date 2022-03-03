import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderContainerComponent } from "./project/order-container/order-container.component";
import { UserContainerComponent } from "./project/user-container/user-container.component";

const routes: Routes = [
    {path: "users", component: UserContainerComponent},
    {path: "orders", component: OrderContainerComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}