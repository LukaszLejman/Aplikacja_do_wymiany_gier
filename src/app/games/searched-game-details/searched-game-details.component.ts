import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-searched-game-details',
  templateUrl: './searched-game-details.component.html',
  styleUrls: ['./searched-game-details.component.css']
})
export class SearchedGameDetailsComponent implements OnInit, OnDestroy {
  private gameSubscription: ISubscription;
  private ownerSubscription: ISubscription;
  private game: any = {};
  private owner: string;
  constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService) { }

  ngOnInit() {
    let gameId;
    this.activatedRoute.params.subscribe(params => {
      const id: number = +params['id'];
      gameId = id;
      this.gameSubscription = this.gamesService.getSearchedGame(gameId).subscribe(
        data => {
          this.game = data;
          this.ownerSubscription = this.gamesService.getOwnerName(data.ownerId).subscribe(
            data2 => {
              this.owner = data2;
            }
          );
        }
      );
    });
  }

  ngOnDestroy() {
    if (this.gameSubscription) {
      this.gameSubscription.unsubscribe();
      this.ownerSubscription.unsubscribe();
    }
  }

}
