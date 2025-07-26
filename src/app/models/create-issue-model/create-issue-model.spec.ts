import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIssueModel } from './create-issue-model';

describe('CreateIssueModel', () => {
  let component: CreateIssueModel;
  let fixture: ComponentFixture<CreateIssueModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateIssueModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIssueModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
