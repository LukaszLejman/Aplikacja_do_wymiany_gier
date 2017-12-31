import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySearchedGamesComponent } from './my-searched-games.component';

describe('MySearchedGamesComponent', () => {
  let component: MySearchedGamesComponent;
  let fixture: ComponentFixture<MySearchedGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySearchedGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySearchedGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
