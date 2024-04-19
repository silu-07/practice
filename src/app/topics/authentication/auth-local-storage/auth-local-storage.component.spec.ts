import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLocalStorageComponent } from './auth-local-storage.component';

describe('AuthLocalStorageComponent', () => {
  let component: AuthLocalStorageComponent;
  let fixture: ComponentFixture<AuthLocalStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLocalStorageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthLocalStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
