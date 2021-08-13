import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/products/product';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  name = localStorage.getItem('name')
  products: Product[] = []
  sendEdit = {}
  editProduct: Product | undefined;
  addProduct= false

  constructor(private router: Router, private confServ: ConfigService) { }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.getProducts()
  }

  edit(product: Product) {
    this.editProduct = product
    this.sendEdit = JSON.stringify(this.editProduct)
  }

  onAddProduct() {
    this.addProduct = true
  }

  deleteProduct(id: number) {
    this.confServ.removeProduct(id).subscribe()
    window.location.reload()
  }

  onLogout() {
    localStorage.setItem('log', '0')
    localStorage.removeItem('role')
    localStorage.removeItem('name')
    this.router.navigate(['/login1'])
  }

  getProducts() {
    this.confServ.getProduct().subscribe(products => (this.products = products));
  }

  updateProduct(eProduct: Product) {
    this.confServ.updateProduct(eProduct, eProduct.id)
      .subscribe(product => {
        const i = product ? this.products.findIndex(y => y.id === product.id) : -1;
        if (i > -1) {
          this.products[i] = product;
        }
      });
    this.editProduct = undefined;
  }

  detail(id: number){
    this.router.navigate(['/product', id])
  }
}
