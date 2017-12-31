import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from '../games.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit, OnDestroy {
  public games: Array<any>;
  public gameName: string = 'title';
  public path: string = 'game_details';
  private myGamesSubscription: ISubscription;
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.myGamesSubscription = this.gamesService.getAllGames().subscribe(
      data => {
        this.games = data;
      }
    );
  }

  ngOnDestroy() {
    this.myGamesSubscription.unsubscribe();
  }

}
