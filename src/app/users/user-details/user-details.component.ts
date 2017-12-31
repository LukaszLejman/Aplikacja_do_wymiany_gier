import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserListService } from '../user-list.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  private userSubscription: ISubscription;
  private user = {};
  private comments = [];
  private gameName = 'title';
  private gamesPath = 'game_details';
  private searchedGamesPath = 'searched_game_details';
  constructor(private activatedRoute: ActivatedRoute, private userListService: UserListService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id: number = +params['id'];
      this.userSubscription = this.userListService.getUser(id).subscribe(
        data => {
          this.user = data;
          this.comments = data.comments;
        });
    });
  }

  ngOnDestroy() {

  }

}
