import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCadastroProfileComponent } from './form-cadastro-profile.component';

describe('FormCadastroProfileComponent', () => {
  let component: FormCadastroProfileComponent;
  let fixture: ComponentFixture<FormCadastroProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCadastroProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCadastroProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
