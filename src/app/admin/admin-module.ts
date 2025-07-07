import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { ManageTickets } from './manage-tickets/manage-tickets';
import { Analytics } from './analytics/analytics';


@NgModule({
  declarations: [
    Dashboard,
    ManageTickets,
    Analytics
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
