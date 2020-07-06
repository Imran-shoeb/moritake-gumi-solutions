import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserRegistrationComponent } from "./user-registration/user-registration.component";
import { UserListComponent } from "./user-list/user-list.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { UserProfileEditComponent } from "./user-profile-edit/user-profile-edit.component";
import { UserComponent } from './user/user.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../guards/auth.guard';


const userRoutes: Routes = [
  {
    path: "user",
    component: UserComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: "registration", component: UserRegistrationComponent },
      { path: "list", component: UserListComponent },
      {
        path: "",
        children: [
          { path: "", component: UserProfileComponent },
          { path: "edit", component: UserProfileEditComponent },
          { path: "changePassword", component: UserChangePasswordComponent }
        ]
      },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(userRoutes, { onSameUrlNavigation: 'reload' })
  ]
})
export class UserRoutingModule {}
