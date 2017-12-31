import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserListService } from '../user-list.service';
import { ISubscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  public users: Array<any>;
  public userName: string = 'login';
  private usersListSubscription: ISubscription;
  private path: string = 'user_details';
  constructor(private userListService: UserListService) { }

  ngOnInit() {
    this.usersListSubscription = this.userListService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }

  ngOnDestroy() {
    if (this.usersListSubscription) {

      this.usersListSubscription.unsubscribe();
    }
  }

}
