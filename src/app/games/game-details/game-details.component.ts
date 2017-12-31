import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GamesService } from '../games.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit, OnDestroy {
  private gameSubscription: ISubscription;
  private ownerSubscription: ISubscription;
  private game: any = {};
  private owner: string;
  private hasParams: boolean;
  constructor(private activatedRoute: ActivatedRoute, private gamesService: GamesService, private router: Router) { }

  ngOnInit() {
    let gameId;
    this.activatedRoute.params.subscribe(params => {
      const id: number = +params['id'];
      gameId = id;
      this.gameSubscription = this.gamesService.getGame(gameId).subscribe(
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

  goToUser(gameData) {
    this.router.navigate(['/users/user_details', gameData.ownerId]);
  }

}
