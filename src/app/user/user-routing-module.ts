import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { IssueDashboard } from './issue-dashboard/issue-dashboard'
import { FeedbackDashboard } from './feedback-dashboard/feedback-dashboard'

const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard
  },
  {
    path: 'issueBoard',
    component: IssueDashboard
  },
  {
    path: 'feedbackBoard',
    component: FeedbackDashboard
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
