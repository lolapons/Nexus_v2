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

  // Estado de los errores
  errores = {
    proveedor: false,
    modelo: false,
    nombre: false,
    descripcion: false
  };

  // Mensajes de error
  mensajesError = {
    proveedor: 'Debes seleccionar un proveedor',
    modelo: 'Debes seleccionar un modelo',
    nombre: 'Debes introducir un nombre para el modelo',
    descripcion: 'Debes introducir una descripción para el modelo'
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

  // Validar el paso de selección de modelo
  validarSeleccionModelo(): boolean {
    this.errores.proveedor = !this.modeloData.proveedor;
    this.errores.modelo = !this.modeloData.modelo;
    return !this.errores.proveedor && !this.errores.modelo;
  }

  // Validar el paso de configuración del modelo
  validarConfiguracionModelo(): boolean {
    this.errores.nombre = !this.modeloData.nombre;
    this.errores.descripcion = !this.modeloData.descripcion;
    return !this.errores.nombre && !this.errores.descripcion;
  }

  avanzarPaso(): void {
    switch (this.estado) {
      case 'bienvenido':
        this.estado = 'seleccion-modelo';
        break;
      case 'seleccion-modelo':
        if (this.validarSeleccionModelo()) {
          this.estado = 'configuracion-modelo';
        }
        break;
      case 'configuracion-modelo':
        if (this.validarConfiguracionModelo()) {
          this.estado = 'configuracion-api';
        }
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
    // Limpiar errores al retroceder
    this.errores.proveedor = false;
    this.errores.modelo = false;

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
    this.errores.proveedor = false;
  }

  seleccionarModelo(modelo: string): void {
    this.modeloData.modelo = modelo;
    this.errores.modelo = false;
  }

  get jsonResumen(): string {
    return JSON.stringify(this.modeloData, null, 2);
  }
} 