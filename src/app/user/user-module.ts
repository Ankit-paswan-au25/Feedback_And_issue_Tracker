import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { SubmitTicket } from './submit-ticket/submit-ticket';
import { MyTickets } from './my-tickets/my-tickets';
import { IssueDashboard } from './issue-dashboard/issue-dashboard';
import { FeedbackDashboard } from './feedback-dashboard/feedback-dashboard';


@NgModule({
  declarations: [
    Dashboard,
    SubmitTicket,
    MyTickets,
    IssueDashboard,
    FeedbackDashboard
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
