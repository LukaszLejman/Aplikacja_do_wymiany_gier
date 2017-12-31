import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public login(login: string, password: string): Observable<boolean> {
    return this.http.get('../../assets/users.json')
      .map((response: Response) => {
        const array = response.json();
        const user = array.find(userData => userData.login === login);
        if (user) {
          if (user.password === password) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
  }


}
