import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { AdminDashboardComponent } from 'src/app/member/admin/admin-dashboard/admin-dashboard.component';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnChanges {
  curVal0
  curVal = undefined
  @Input() item=''
  constructor(private confServ: ConfigService, private a : AdminDashboardComponent) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let change = changes[propName];
      this.curVal = change.currentValue
      this.curVal0 = JSON.parse(this.curVal)
      console.log(this.curVal0);
    }
  }

  ngOnInit(): void {
  }

  updateUser(){
    this.a.updateUser(this.curVal0)
  }
}
