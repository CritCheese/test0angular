import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  admin = { name: 'admin', password: 'root' };
  user = [{ name: 'ace', password: 'bruh' }, { name: 'king', password: 'bruh' }]
  form;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
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
    let c = this.router.url
    if (c == '/login0') {
      if (this.form.value.name == this.admin.name && this.form.value.password == this.admin.password) {
        this.transSuccess(this.form.value.name, '/adminDashboard', 'admin')
        alert('Hello')
      } else {
        alert('Login failed')
      }
    }

    if (c == '/login1') {
      var a = false
      for (var x = 0; x < this.user.length; x++) {
        if (this.form.value.name == this.user[x].name && this.form.value.password == this.user[x].password) {
          alert('Hello')
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
}


