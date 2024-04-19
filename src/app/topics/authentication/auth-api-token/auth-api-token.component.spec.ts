import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthApiTokenComponent } from './auth-api-token.component';

describe('AuthApiTokenComponent', () => {
  let component: AuthApiTokenComponent;
  let fixture: ComponentFixture<AuthApiTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthApiTokenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthApiTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
