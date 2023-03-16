import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "../../services/products/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public PRODUCTS: any;

  constructor(private router: Router, private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response: any) => {
      this.PRODUCTS = response;
    });
  }


}
