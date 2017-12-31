import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';

@Injectable()
export class UserListService {

  constructor(private http: Http) { }

  public getUsers(): Observable<any> {
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        const array = response.json();
        return array;
      });
  }

  public getUser(id: number): Observable<any> {
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        const array = response.json();
        const user = array.find(userData => userData.id === id.toString());
        return user;
      });
  }

}
