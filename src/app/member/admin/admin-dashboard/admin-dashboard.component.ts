import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { User } from '../../user/user';



@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  uid=''
  uname=''
  upassw=''
  uclass=''
  ustatus=''
  u: User

  users: User[] = [];
  addUser = false;
  editUser: User | undefined;
  name = localStorage.getItem('name')

  constructor(
    private router: Router,
    private configServ: ConfigService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  onAddUser() {
    this.addUser = true
  }

  offAddUser() {
    this.addUser = false
  }

  edit(user: User) {
    this.editUser = user
    console.log(this.editUser)
  }

  onLogout() {
    localStorage.setItem('log', '0')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
    this.router.navigate(['/login1'])
  }

  onAdd(){
    this.u={id:this.users.length, name:this.uname, password:this.upassw, class:this.uclass, status:this.ustatus}
    this.configServ.addUser(this.u).subscribe(u => this.users.push(u));
    window.location.reload()
  }

  getUsers() {
    this.configServ.getUser().subscribe(users => (this.users = users));
  }

  deleteUser(id: number) {
    this.configServ.removeUser(id).subscribe()
    window.location.reload()
  }

  updateUser() {
    this.configServ.updateUser(this.editUser, this.editUser.id)
    .subscribe(user => {
      const i = user ? this.users.findIndex(x => x.id === user.id) : -1;
      if (i > -1) {
        this.users[i] = user;
      }
    });
    this.editUser=undefined;
  }
}

