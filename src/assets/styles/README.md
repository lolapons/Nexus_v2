# Sistema de Diseño - Nexus

Este sistema de diseño está basado en el Metrix SaaS Dashboard UI Kit y proporciona todos los elementos necesarios para crear interfaces de usuario coherentes y visualmente atractivas.

## Estructura de Archivos

- `colors.css` - Sistema de colores y paleta
- `typography.css` - Sistema tipográfico
- `backgrounds.css` - Clases para fondos basados en la paleta
- `layout-background.css` - Fondo de layout con efectos visuales

## Guía de Uso

### Colores

El sistema de colores incluye:

- Colores primarios (violetas)
- Colores secundarios (aguamarina)
- Escala de negros/grises
- Colores de acción (verde y rojo)

Ejemplo:
```css
.my-element {
  color: var(--primary-100);
  background-color: var(--secondary-10);
  border: 1px solid var(--black-20);
}
```

### Tipografía

El sistema tipográfico utiliza:

- Poppins para encabezados (h1, h2, h3)
- Inter para texto y elementos de UI

Ejemplo:
```html
<h1 class="h1-bold">Título Principal</h1>
<p class="paragraph-1">Texto normal del párrafo.</p>
<span class="label-2-medium">Etiqueta</span>
```

### Fondos

Puedes usar las clases de fondo directamente:

```html
<div class="bg-primary-80">Fondo primario</div>
<div class="bg-secondary-40">Fondo secundario</div>
<div class="bg-black-10">Fondo gris claro</div>
```

### Layout con Fondo Especial

Para implementar el fondo de layout con efectos visuales:

```html
<div class="layout-container">
  <div class="layout-blur-container">
    <div class="blob-circle-1"></div>
    <div class="blob-circle-2"></div>
    <div class="blob-circle-3"></div>
  </div>
  
  <!-- Tu contenido aquí -->
</div>
```

## Ejemplos

Consulta el archivo `src/assets/examples/layout-example.html` para ver un ejemplo completo de implementación. 