import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id;
  p:Product;

  constructor(private ar: ActivatedRoute, private confServ: ConfigService) {}

  ngOnInit(): void {
    this.id=this.ar.snapshot.paramMap.get('id')
    console.log(this.id)
    this.getProduct(this.id)
    console.log(this.p)
  }

  getProduct(id: number){
    this.confServ.getProductDetail(id).subscribe((p0:Product) => (this.p = p0));
  }

}
