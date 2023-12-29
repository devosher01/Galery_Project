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


## Instrucciones de Uso

1. Abre el archivo `index.html` en tu navegador web.
2. Explora las categorías haciendo clic en los enlaces proporcionados.
3. Dentro de cada categoría, navega por las imágenes utilizando los botones de izquierda y derecha.
4. Haz clic en las miniaturas para ver las imágenes en tamaño grande.
5. Cierra la galería en cualquier momento usando el botón de cierre.

¡Disfruta explorando el viaje por el mundo!




Este README proporciona una descripción general de las funcionalidades del proyecto, la estructura del proyecto y las tecnologías utilizadas. Además, incluye instrucciones básicas para el uso de la aplicación.
