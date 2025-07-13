import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../core/services/user-service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit {
  form!: FormGroup
  constructor(private toast: ToastrService, private userService: UserService, private route: Router) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      ConfirmPassword: new FormControl('')
    });
  }

  onSubmit() {
    console.log("jiii")
    if (this.form.invalid) {
      this.toast.error('Error', 'Please Fill Correct Details')
      return
    }

    const newUser = {
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }
    this.userService.register(newUser).subscribe((data: any) => {
      console.log(data, "as a response")
      this.route.navigate([''])
      this.toast.success('Success', 'Now you can login')

    })
    console.log("hi from register")
  }

}
