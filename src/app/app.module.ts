import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersModule } from './users/users.module';
import { MyGamesComponent } from './games/my-games/my-games.component';
import { GameDetailsComponent } from './games/game-details/game-details.component';
import { GamesModule } from './games/games.module';
import { MySearchedGamesComponent } from './games/my-searched-games/my-searched-games.component';
import { SearchedGameDetailsComponent } from './games/searched-game-details/searched-game-details.component';
import { GamesListComponent } from './games/games-list/games-list.component';
import { SearchComponent } from './games/search/search.component';

const routes: Array<Route> = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'users', component: UsersListComponent, children: [
      {
        path: 'user_details/:id', component: UserDetailsComponent, children: [
          { path: 'game_details/:id', component: GameDetailsComponent },
          { path: 'searched_game_details/:id', component: SearchedGameDetailsComponent }
        ]
      }
    ]
  },
  {
    path: 'my_games', component: MyGamesComponent, children: [
      { path: 'game_details/:id', component: GameDetailsComponent }
    ]
  },
  {
    path: 'my_searched_games', component: MySearchedGamesComponent, children: [
      { path: 'searched_game_details/:id', component: SearchedGameDetailsComponent }
    ]
  },
  {
    path: 'games', component: GamesListComponent, children: [
      { path: 'game_details/:id', component: GameDetailsComponent }
    ]
  },
  {
    path: 'search', component: SearchComponent, children: [
      { path: 'game_details/:id', component: GameDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule,
    UsersModule,
    GamesModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
