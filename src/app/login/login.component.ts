import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private loginStatus: boolean = true;
  constructor(private loginService: LoginService, private router: Router) { }
  private loginSubscription: ISubscription;
  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.loginSubscription) {

      this.loginSubscription.unsubscribe();
    }
  }

  onSubmit(value: any): void {
    this.loginSubscription = this.loginService.login(value.username, value.password).subscribe(
      data => {
        if (data) {
          this.loginStatus = true;
          sessionStorage.setItem('login', value.username);
          sessionStorage.setItem('logged', 'true');
          this.router.navigate(['/home']);
          window.location.reload();
        } else {
          this.loginStatus = false;
        }
      }
    );
  }
}
