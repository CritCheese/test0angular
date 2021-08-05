import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-test01',
  templateUrl: './test01.component.html',
  styleUrls: ['./test01.component.css']
})
export class Test01Component implements OnInit {

  constructor(private router: Router) {
    const control = new FormControl('', { updateOn: 'blur' });
    console.log(control.value);      // ''
    console.log(control.status);     // 'INVALID'  
  }

  ngOnInit(): void {
  }

  onLogout(){
    localStorage.setItem('log', '0')
    this.router.navigate(['/login1'])
  }
}
