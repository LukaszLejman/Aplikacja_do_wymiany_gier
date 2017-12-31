import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListService } from './user-list.service';
import { SharedModule } from '../shared/shared.module';
import { Route, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UsersListComponent, UserDetailsComponent],
  declarations: [UsersListComponent, UserDetailsComponent],
  providers: [UserListService]
})
export class UsersModule { }
