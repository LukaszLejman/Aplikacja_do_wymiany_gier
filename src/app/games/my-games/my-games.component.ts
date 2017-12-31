import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from '../games.service';
import { ISubscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.css']
})
export class MyGamesComponent implements OnInit, OnDestroy {
  public games: Array<any>;
  public gameName: string = 'title';
  public path: string = 'game_details';
  private myGamesSubscription: ISubscription;
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    const login = sessionStorage.getItem('login');
    this.myGamesSubscription = this.gamesService.getUserGames(login).subscribe(
      data => {
        this.games = data;
      }
    );
  }

  ngOnDestroy() {
    if (this.myGamesSubscription) {

      this.myGamesSubscription.unsubscribe();
    }
  }
}
