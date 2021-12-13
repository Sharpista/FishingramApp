import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAlbumsCardsComponent } from './photo-albums-cards.component';

describe('PhotoAlbumsCardsComponent', () => {
  let component: PhotoAlbumsCardsComponent;
  let fixture: ComponentFixture<PhotoAlbumsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoAlbumsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAlbumsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
