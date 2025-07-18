import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  constructor(private route: Router) { }
  ngOnInit(): void {

  }
  userRouteTo(data: any) {
    this.route.navigate([`user/${data}`])
  }
}
