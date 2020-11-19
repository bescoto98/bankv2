import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAccountViewComponent } from './pending-account-view.component';

describe('PendingAccountViewComponent', () => {
  let component: PendingAccountViewComponent;
  let fixture: ComponentFixture<PendingAccountViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAccountViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
