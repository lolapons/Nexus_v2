import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wizard-crear-modelo',
  templateUrl: './wizard-crear-modelo.component.html',
  styleUrls: ['./wizard-crear-modelo.component.css'],
  standalone: false
})
export class WizardCrearModeloComponent implements OnInit {
  @Input() estado: 'bienvenido' | 'seleccion-modelo' | 'configuracion-modelo' | 'configuracion-api' | 'resumen' = 'bienvenido';
  
  // Modelo para almacenar los datos del formulario
  modeloData = {
    nombre: '',
    descripcion: '',
    proveedor: '',
    modelo: '',
    urlApi: '',
    claveApi: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  avanzarPaso(): void {
    switch (this.estado) {
      case 'bienvenido':
        this.estado = 'seleccion-modelo';
        break;
      case 'seleccion-modelo':
        this.estado = 'configuracion-modelo';
        break;
      case 'configuracion-modelo':
        this.estado = 'configuracion-api';
        break;
      case 'configuracion-api':
        this.estado = 'resumen';
        break;
      case 'resumen':
        // Aquí se podría enviar el formulario
        console.log('Formulario completado', this.modeloData);
        break;
    }
  }

  retrocederPaso(): void {
    switch (this.estado) {
      case 'seleccion-modelo':
        this.estado = 'bienvenido';
        break;
      case 'configuracion-modelo':
        this.estado = 'seleccion-modelo';
        break;
      case 'configuracion-api':
        this.estado = 'configuracion-modelo';
        break;
      case 'resumen':
        this.estado = 'configuracion-api';
        break;
    }
  }

  seleccionarProveedor(proveedor: string): void {
    this.modeloData.proveedor = proveedor;
  }

  seleccionarModelo(modelo: string): void {
    this.modeloData.modelo = modelo;
  }

  get jsonResumen(): string {
    return JSON.stringify(this.modeloData, null, 2);
  }
} 