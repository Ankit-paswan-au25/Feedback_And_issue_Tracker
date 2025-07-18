import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDashboard } from './issue-dashboard';

describe('IssueDashboard', () => {
  let component: IssueDashboard;
  let fixture: ComponentFixture<IssueDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IssueDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
