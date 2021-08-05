import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  name = localStorage.getItem('name')

  onLogout(){
    localStorage.setItem('log', '0')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
    this.router.navigate(['/login1'])
  }

}
