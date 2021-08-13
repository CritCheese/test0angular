import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { Product } from './product';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  id;
  p;
  constructor(private ar: ActivatedRoute, private confServ: ConfigService) {}

  ngOnInit(): void {
    this.p = {}
    this.id=this.ar.snapshot.paramMap.get('id')
    this.getProduct(this.id)
  }

  getProduct(id: number){
    this.confServ.getProductDetail(id).subscribe((p0:Product) => {this.p = p0});
  }


}
