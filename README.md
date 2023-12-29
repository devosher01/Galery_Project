# Galería de Imágenes Interactiva

Este proyecto consiste en una galería de imágenes interactiva desarrollada con JavaScript. Permite a los usuarios explorar diversas categorías de imágenes y seleccionar una para visualizarla en un tamaño más grande. Al hacer clic en una imagen, esta se presenta en un formato ampliado junto con su nombre y descripción.

## Características

### Navegación por Categorías

Los usuarios tienen la capacidad de seleccionar una categoría específica para visualizar únicamente las imágenes asociadas a dicha categoría.

### Visualización de Imágenes

Al hacer clic en una imagen, se despliega en un formato ampliado, acompañada de su nombre y descripción detallada.

### Datos de Imágenes

Cada imagen está asociada con datos tales como un ID único, un nombre descriptivo, una ruta de acceso y una detallada descripción.

## Tecnologías Utilizadas

- **JavaScript:** El proyecto se construye principalmente con JavaScript. Se emplean módulos para organizar el código en archivos separados, facilitando su mantenimiento y comprensión.

- **SASS:** Se utiliza SASS, un preprocesador de CSS, para escribir estilos de manera eficiente y aprovechar características adicionales como variables y anidamiento.

- **Rollup:** Rollup se emplea como un empaquetador de módulos para compilar los archivos JavaScript en un solo archivo bundle.js, que se sirve al navegador.

- **HTML/CSS:** La estructura y el estilo de la página se desarrollan utilizando HTML y CSS.

## Estructura del Proyecto

La organización de archivos y directorios del proyecto es la siguiente:

```
.
├── categorieEvent.js
├── data
│   ├── categories.js
│   └── pictures.js
├── gallery
│   ├── closeGallery.js
│   ├── galleryEvents.js
│   ├── loadPicture.js
│   └── slideClick.js
├── index.js
└── loadCategory.js


```

Este diseño modular permite una gestión eficiente del código y facilita su expansión y mantenimiento.
