import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { SubmitTicket } from './submit-ticket/submit-ticket';
import { MyTickets } from './my-tickets/my-tickets';


@NgModule({
  declarations: [
    Dashboard,
    SubmitTicket,
    MyTickets
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
