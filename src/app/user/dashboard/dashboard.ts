import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CreateIssueModel } from '../../models/create-issue-model/create-issue-model'
import { CreateFeedback } from '../../models/create-feedback/create-feedback'
@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  modalRef?: BsModalRef;
  name!: any
  eretest: any = ['t', 'r', 'f',]
  isLogoutVisible: boolean = false
  constructor(private route: Router, private modalService: BsModalService) { }
  ngOnInit(): void {

  }

  createIssue() {
    const data = {
      named: 1,
      test: "anhc"
    }
    this.modalRef = this.modalService.show(CreateIssueModel, {
      initialState: {
        data: data
      }
    });
  }

  requestFeedback() {
    const data = {
      named: 1,
      test: "anhc"
    }
    this.modalRef = this.modalService.show(CreateFeedback, {
      initialState: {
        data: data
      }
    });
  }

  userRouteTo(data: any) {
    this.route.navigate([`user/${data}`])
  }

  logoutShow() {
    this.isLogoutVisible = !this.isLogoutVisible

  }
  logout(): void {

    // Clear user data (e.g., JWT, user info)
    localStorage.removeItem('token');
    // localStorage.removeItem('user'); // if you store user info

    // Optionally clear session storage
    sessionStorage.clear();

    // // Redirect to login or home
    this.route.navigate(['/']);
  }
}
