import { Component, OnInit } from '@angular/core';
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-feedback',
  standalone: false,

  templateUrl: './create-feedback.html',
  styleUrl: './create-feedback.scss'
})
export class CreateFeedback implements OnInit {
  temp: any = ['a', 'b', 'c']
  data!: any
  constructor() { }
  ngOnInit(): void {

  }
}
