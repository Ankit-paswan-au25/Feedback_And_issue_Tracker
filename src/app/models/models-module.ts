import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelsRoutingModule } from './models-routing-module';
import { CreateIssueModel } from './create-issue-model/create-issue-model';

import { UpdateUserModel } from './update-user-model/update-user-model';
import { GenrateReportModel } from './genrate-report-model/genrate-report-model';
import { FormsModule } from '@angular/forms';
import { CreateFeedback } from './create-feedback/create-feedback';


@NgModule({
  declarations: [
    CreateIssueModel,
    UpdateUserModel,
    GenrateReportModel,
    CreateFeedback
  ],

  imports: [
    CommonModule,
    ModelsRoutingModule,
    FormsModule
  ]
})
export class ModelsModule { }
