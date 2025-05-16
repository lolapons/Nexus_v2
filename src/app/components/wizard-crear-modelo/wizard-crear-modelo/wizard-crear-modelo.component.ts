import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-wizard-crear-modelo',
  templateUrl: './wizard-crear-modelo.component.html',
  styleUrls: ['./wizard-crear-modelo.component.css'],
  standalone: false
})
export class WizardCrearModeloComponent implements OnInit {
  @Input() estado: 'bienvenido' | 'seleccion-modelo' | 'configuracion-modelo' | 'configuracion-api' | 'resumen' = 'bienvenido';
  
  // Referencia al contenedor del wizard para controlar el scroll
  @ViewChild('wizardContainer', { static: false }) wizardContainer!: ElementRef;
  
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

  // Método para hacer scroll hacia arriba
  scrollToTop(): void {
    setTimeout(() => {
      if (this.wizardContainer && this.wizardContainer.nativeElement) {
        this.wizardContainer.nativeElement.scrollTop = 0;
      }
    }, 0);
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
    // Hacer scroll hacia arriba después de cambiar el estado
    this.scrollToTop();
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
    // Hacer scroll hacia arriba después de cambiar el estado
    this.scrollToTop();
  }

  seleccionarProveedor(proveedor: string): void {
    this.modeloData.proveedor = proveedor;
  }

  seleccionarModelo(modelo: any): void {
    this.modeloData.modelo = modelo;
  }

  get jsonResumen(): string {
    return JSON.stringify(this.modeloData, null, 2);
  }
} 