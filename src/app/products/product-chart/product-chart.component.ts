import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { ConfigService } from 'src/app/config.service';
import { Product } from '../product';



@Component({
  selector: 'app-product-chart',
  templateUrl: './product-chart.component.html',
  styleUrls: ['./product-chart.component.css']
})
export class ProductChartComponent implements OnInit, AfterContentInit {
  initd = false
  q1
  id
  p
  i = 1
  amount
  @Input() q = ""
  constructor(private ar: ActivatedRoute, private confServ: ConfigService) { }

  ngAfterContentInit(): void {
    this.q1 = this.p.quantity
  }

  ngOnInit() {
    this.p = {}
    this.id = this.ar.snapshot.paramMap.get('id')
    this.getProduct(this.id)
  }

  add() {
    if (this.initd != true) {
      alert("Chart must be initialized before add new node")
    } else {
      this.lineChartLabels.push("I-" + this.i.toString())
      this.i++
      this.q1 = Math.random() * 100
      this.lineChartData[0].data.push(this.q1)
    }
  }

  addP() {
    if (this.initd != true) {
      alert("Chart must be initialized before add new node")
    } else {
      this.i++
      this.lineChartLabels.push("I-" + this.i.toString())
      this.q1 = parseInt(this.q1) + parseInt(this.amount)
      this.lineChartData[0].data.push(this.q1)
    }
  }

  subP() {
    if (this.initd != true) {
      alert("Chart must be initialized before add new node")
    } else {
      let q2 = this.q1
      this.q1 = parseInt(this.q1) - parseInt(this.amount)
      if (this.q1 < 0) {
        alert("Cannot remove more than the amount currently have")
        this.q1 = q2
      } else {
        this.i++
        this.lineChartLabels.push("I-" + this.i.toString())
        this.lineChartData[0].data.push(this.q1)
      }
    }
  }

  initChart() {
    if (this.initd != true) {
      this.lineChartLabels.push("I-" + this.i.toString())
      this.lineChartData[0].data.push(this.p.quantity)
      this.initd = true
      this.i++
    } else { alert("Chart is already initialized!") }
  }

  getProduct(id: number) {
    this.confServ.getProductDetail(id).subscribe((p0: Product) => { this.p = p0 });
  }

  public lineChartData: ChartDataSets[] = [
    { data: [0], label: 'Product' },
  ];
  public lineChartLabels: Label[] = ["I-0"];
  public lineChartOptions: (ChartOptions) = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'red',
      backgroundColor: 'rgba(255,0,0,0.0)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

}


