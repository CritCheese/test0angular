import { Component, OnInit, Input, OnChanges, SimpleChanges  } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { UserDashboardComponent } from '../user-dashboard.component';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit, OnChanges {
  curVal0
  curVal = undefined
  @Input() item=''
  constructor(private confServ: ConfigService, private a : UserDashboardComponent) {}

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let change = changes[propName];
      this.curVal = change.currentValue
      this.curVal0 = JSON.parse(this.curVal)
    }
  }

  ngOnInit(): void {
  }

  updateProduct(){
    this.a.updateProduct(this.curVal0)
  }
}
