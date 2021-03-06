import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class GamesService {

  constructor(private http: Http) { }

  public getUserGames(login: string): Observable<any> {
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        const array = response.json();
        const user = array.find(userData => userData.login === login);
        return user.games;
      });
  }

  public getAllGames(): Observable<any> {
    let allGames = [];
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        const array = response.json();
        array.forEach(user => {
          allGames = allGames.concat(user.games);
        });
        return allGames;
      });
  }

  public searchGames(query: string): Observable<any> {
    const searchResult = [];
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        const array = response.json();
        array.forEach(user => {
          const games = user.games;
          games.forEach(game => {
            const gameTitle = game.title;
            if (gameTitle.indexOf(query) !== -1) {
              searchResult.push(game);
            }
          });
        });
        return searchResult;
      });
  }

  public getUserSearchedGames(login: string): Observable<any> {
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        const array = response.json();
        const user = array.find(userData => userData.login === login);
        return user.searchedGames;
      });
  }

  public getGame(id: string): Observable<any> {
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        let gameToShow;
        const array = response.json();
        array.forEach(user => {
          const games = user.games;
          games.forEach(game => {
            if (game.id === id.toString()) {
              gameToShow = game;
            }
          });
        });
        return gameToShow;
      });
  }

  public getSearchedGame(id: string): Observable<any> {
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        let gameToShow;
        const array = response.json();
        array.forEach(user => {
          const games = user.searchedGames;
          games.forEach(game => {
            if (game.id === id.toString()) {
              gameToShow = game;
            }
          });
        });
        return gameToShow;
      });
  }

  public getOwnerName(id: string): Observable<any> {
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        const array = response.json();
        const user = array.find(userData => userData.id === id);
        return user.login;
      });
  }

}
