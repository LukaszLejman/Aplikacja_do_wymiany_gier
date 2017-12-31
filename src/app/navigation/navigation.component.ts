import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private router: Router) { }
  public loginStatus: boolean = false;
  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem('logged')) !== null) {
      this.loginStatus = JSON.parse(sessionStorage.getItem('logged'));
    }
  }
  logOff() {
    sessionStorage.clear();
    this.router.navigate(['home']);
    window.location.reload();
  }
}
