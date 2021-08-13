import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { User } from '../../user/user';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  uid = ''
  uname = ''
  upassw = ''
  uclass = ''
  ustatus = ''
  addForm
  au: User
  sendEdit = {}
  users: User[] = [];
  addUser = false;
  editUser: User | undefined;
  name = localStorage.getItem('name')

  constructor(
    private router: Router,
    private configServ: ConfigService) { }

  ngOnInit(): void {
    this.getUsers();
    this.addForm = new FormGroup({
      // name1: new FormControl(this.au.name, [Validators.required,]),
      // passw1: new FormControl(this.au.password, [Validators.required]),
      // class1: new FormControl(this.au.class, [Validators.required]),
      // status1: new FormControl(this.au.status, [Validators.required])
    });
  }

  onAddUser() {
    this.addUser = true
  }

  offAddUser() {
    this.addUser = false
  }

  edit(user: User) {
    this.editUser = user
    this.sendEdit = JSON.stringify(this.editUser)
    //json parse component
    // console.log(this.editUser)
  }

  onLogout() {
    localStorage.setItem('log', '0')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
    this.router.navigate(['/login1'])
  }

  onAdd() {
    var x1 = 0;
    console.log(this.au)
    // for (var x2 = 1; x2 <= this.users.length; x2++) {
    //   if (x1 == this.users[x1].id) {
    //     x1++
    //   }
    // }

    // this.u = { id: x1, name: this.addForm.name1, password: this.upassw, class: this.uclass, status: this.ustatus}
    // this.configServ.addUser(this.u).subscribe(u => this.users.push(u));
    // this.addUser = false

    // window.location.reload()
  }

  getUsers() {
    this.configServ.getUser().subscribe(users => (this.users = users));
  }

  deleteUser(id: number) {
    this.configServ.removeUser(id).subscribe()
    window.location.reload()
  }

  updateUser(eUser: User) {
    this.configServ.updateUser(eUser, eUser.id)
      .subscribe(user => {
        const i = user ? this.users.findIndex(x => x.id === user.id) : -1;
        if (i > -1) {
          this.users[i] = user;
        }
      });
    this.editUser = undefined;
  }
}

