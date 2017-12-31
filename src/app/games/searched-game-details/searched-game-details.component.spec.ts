import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedGameDetailsComponent } from './searched-game-details.component';

describe('SearchedGameDetailsComponent', () => {
  let component: SearchedGameDetailsComponent;
  let fixture: ComponentFixture<SearchedGameDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchedGameDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedGameDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
