import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserModel } from './update-user-model';

describe('UpdateUserModel', () => {
  let component: UpdateUserModel;
  let fixture: ComponentFixture<UpdateUserModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateUserModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
