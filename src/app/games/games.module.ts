import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [GamesListComponent, GameDetailsComponent],
  declarations: [GamesListComponent, GameDetailsComponent]
})
export class GamesModule { }
