import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from '../games.service';
import { ISubscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-my-searched-games',
  templateUrl: './my-searched-games.component.html',
  styleUrls: ['./my-searched-games.component.css']
})
export class MySearchedGamesComponent implements OnInit, OnDestroy {
  public games: Array<any>;
  public gameName: string = 'title';
  public path: string = 'searched_game_details';
  private mySearchedGamesSubscription: ISubscription;
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    const login = sessionStorage.getItem('login');
    this.mySearchedGamesSubscription = this.gamesService.getUserSearchedGames(login).subscribe(
      data => {
        this.games = data;
      }
    );
  }

  ngOnDestroy() {
    if (this.mySearchedGamesSubscription) {

      this.mySearchedGamesSubscription.unsubscribe();
    }
  }

}
