import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ClientesService} from "../../Services/Clientes/clientes.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {triggerMesaage} from "../../../utils/helper";
import {ResourcesService} from "../../Services/Resources/resources.service";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public PANTALLA?: string = 'Cliente'

  public CITIES: any;
  public CLIENTES: any;
  public TITLE_MODAL?: string;
  public TITLE_BUTTON?: string;

  constructor(private formBuilder: FormBuilder, private clientesService: ClientesService) {
  }

  setTitle(type: any) {
    this.TITLE_MODAL = type === 1 ? `Modificar ${this.PANTALLA}` : type === 2 ? `Agregar ${this.PANTALLA}` : '';
    this.TITLE_BUTTON = type === 1 ? 'Modificar' : type === 2 ? 'Agregar' : '';
  }

  getClientes() {
    this.clientesService.getClients().subscribe((response: any) => {
      this.CLIENTES = response;
    });
  }

  form: FormGroup = new FormGroup({
    restaurante: new FormControl('', [Validators.required, Validators.minLength(6)]),
    contacto: new FormControl('', [Validators.required, Validators.minLength(6)]),
    documento: new FormControl('', [Validators.required, Validators.minLength(6)]),
    ciudad: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  ngOnInit(): void {
    this.getClientes();

    this.CITIES = JSON.parse(localStorage.getItem('ciudades')!);
  }

  agregarOModificarCliente() {
    let data = {
      document: this.form.get('documento')?.value,
      restaurant: this.form.get('restaurante')?.value,
      contact: this.form.get('contacto')?.value,
      city: this.form.get('ciudad')?.value,
      address: this.form.get('direccion')?.value,
      phone: this.form.get('telefono')?.value
    }

    this.clientesService.addClient(data).subscribe((response: any) => {
      if (response.message === 'OK') {
        triggerMesaage('success', 'Cliente Creado');
        this.getClientes();
        this.form.reset();
      }
    });
  }
}
