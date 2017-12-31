import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor() {}
  public loginStatus: boolean = false;
  ngOnInit() {
    if (JSON.parse(sessionStorage.getItem('logged')) !== null) {
      this.loginStatus = JSON.parse(sessionStorage.getItem('logged'));
    }
  }
}
