import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: false,
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.scss'
})
export class SidebarMenu implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  userRouteTo(data: any) {
    this.route.navigate([`user/${data}`])
  }

}
