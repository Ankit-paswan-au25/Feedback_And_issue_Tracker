import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrateReportModel } from './genrate-report-model';

describe('GenrateReportModel', () => {
  let component: GenrateReportModel;
  let fixture: ComponentFixture<GenrateReportModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenrateReportModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenrateReportModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
