import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProfileFollowingComponent } from './card-profile-following.component';

describe('CardProfileFollowingComponent', () => {
  let component: CardProfileFollowingComponent;
  let fixture: ComponentFixture<CardProfileFollowingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProfileFollowingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardProfileFollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
