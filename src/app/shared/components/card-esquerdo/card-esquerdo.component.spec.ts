import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEsquerdoComponent } from './card-esquerdo.component';

describe('CardEsquerdoComponent', () => {
  let component: CardEsquerdoComponent;
  let fixture: ComponentFixture<CardEsquerdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEsquerdoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEsquerdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
