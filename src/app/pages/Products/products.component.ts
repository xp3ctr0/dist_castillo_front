import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ProductsService} from "../../Services/Products/products.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {triggerMesaage} from "../../../utils/helper";

@Component({
  selector: 'app-Products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private PANTALLA?: string = 'Producto'

  public PRODUCTS: any;
  public TITLE_MODAL?: string;
  public TITLE_BUTTON?: string;

  constructor(private router: Router, private formBuilder: FormBuilder, private productService: ProductsService) {
  }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  form: FormGroup = new FormGroup({
    producto: new FormControl('', [Validators.required,Validators.minLength(10)]),
    unidad_medida: new FormControl(null, Validators.required)
  });

  setTitle(type: any) {
    this.TITLE_MODAL = type === 1 ? `Modificar ${this.PANTALLA}` : type === 2 ? `Agregar ${this.PANTALLA}` : '';
    this.TITLE_BUTTON = type === 1 ? 'Modificar' : type === 2 ? 'Agregar' : '';
  }


  obtenerProductos() {
    this.productService.getProducts().subscribe((response: any) => {
      this.PRODUCTS = response;
    });
  }

  agregarOModificarProducto() {
    let data = {
      name: this.form.get('producto')?.value,
      un: this.form.get('unidad_medida')?.value,
    }

    this.productService.addProduct(data).subscribe((response: any) => {
      if (response.message === 'OK') {
        triggerMesaage('success', 'Producto Creado');
        this.obtenerProductos();
        this.form.reset();
      }
    });
  }

}
