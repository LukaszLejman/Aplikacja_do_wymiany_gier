import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { MyGamesComponent } from './my-games/my-games.component';
import { MySearchedGamesComponent } from './my-searched-games/my-searched-games.component';
import { SharedModule } from '../shared/shared.module';
import { GamesService } from './games.service';
import { SearchedGameDetailsComponent } from './searched-game-details/searched-game-details.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [GamesListComponent, GameDetailsComponent, MyGamesComponent, MySearchedGamesComponent],
  declarations: [GamesListComponent, GameDetailsComponent, MyGamesComponent, MySearchedGamesComponent, SearchedGameDetailsComponent],
  providers: [GamesService]
})
export class GamesModule { }
