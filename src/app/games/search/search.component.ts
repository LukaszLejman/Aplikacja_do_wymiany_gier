import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from '../games.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  public games: Array<any>;
  public gameName: string = 'title';
  public path: string = 'game_details';
  private gamesSubscription: ISubscription;
  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.gamesSubscription = this.gamesService.getAllGames().subscribe(
      data => {
        this.games = data;
      }
    );
  }

  onSubmit(value: any): void {
    if (value.search) {
      this.gamesSubscription = this.gamesService.searchGames(value.search).subscribe(
        data => {
          this.games = data;
        }
      );
    } else {
      this.gamesSubscription = this.gamesService.getAllGames().subscribe(
        data => {
          this.games = data;
        }
      );
    }
  }

  ngOnDestroy() {
    this.gamesSubscription.unsubscribe();
  }
}
