import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  @Input()
  items: Array<any>;
  @Input()
  displayProperty: string;
  @Input()
  path: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  goToDetails(item) {
    this.router.navigate([this.path, item.id], { relativeTo: this.route });
  }

}
