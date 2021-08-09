import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { User } from 'src/app/member/user/user';
import { Admin } from 'src/app/member/admin/admin';




@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {

  form;
  c = this.router.url

  users: User[] = []
  admins: Admin[] = []

  constructor(private router: Router, private confServ: ConfigService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    if (this.c == '/login0') {
      this.getAdmins()

    } else {
      this.getUsers();

    }
    let t = localStorage.getItem('log')

    if (t == '1') {
      let r = localStorage.getItem('role')
      if (r == 'admin') {
        this.router.navigate(['/adminDashboard'])
      } else {
        this.router.navigate(['/dashboard'])
      }
    }
  }

  callingFunction() {
    if (this.c == '/login0') {
      var s = false
      for (let admin of this.admins) {
        if (this.form.value.name === admin.name && this.form.value.password === admin.password) {
          s = true
          alert('Hello')
          this.transSuccess(this.form.value.name, '/adminDashboard', 'admin')
          break;
        }
      }
      if (s == false) {
        alert('Login failed')
      }

    }

    if (this.c == '/login1') {
      var a = false
      for (let user of this.users) {
        if (this.form.value.name === user.name && this.form.value.password === user.password) {
          alert('Hello user')
          this.transSuccess(this.form.value.name, '/dashboard', 'user')
          a = true
          break;
        }
      }
      if (a == false) {
        alert('login failed')
      }
    }
  }

  transSuccess(name: string, url0: string, role: string) {
    localStorage.setItem('log', '1')
    localStorage.setItem('role', role)
    localStorage.setItem('name', name)
    this.router.navigate([url0])
  }

  getUsers() {
    this.confServ.getUser().subscribe(users => (this.users = users));
  }

  getAdmins() {
    this.confServ.getAdmin().subscribe(admins => (this.admins = admins));
  }
}


