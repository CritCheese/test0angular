import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { Product } from 'src/app/products/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit,  OnChanges{
  curVal0
  curVal = undefined
  pid = ''
  pname = ''
  pquantity = ''
  pdate = ''
  u
  products: Product[] = []
  constructor(private confServ: ConfigService) { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let change = changes[propName];
      this.curVal = change.currentValue
    }
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.confServ.getProduct().subscribe(p => (this.products = p));
  }

  onAddProduct(){
    var r1 = 0
    this.u={id: r1, name:this.pname, quantity:this.pquantity, date:this.pdate}
    this.confServ.addProduct(this.u).subscribe(u => this.products.push(u));
        window.location.reload()

  }
}
