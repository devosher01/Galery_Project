import dataFotos from "./data/pictures";
import { cargarPicture } from "./gallery/loadPicture";

const contenedorCategorias = document.getElementById("categorias");
const galeria = document.getElementById("galeria");


contenedorCategorias.addEventListener("click", (e) => {
  e.preventDefault();
  const enlace = e.target.closest("a");
  // console.log(enlace);
  if (enlace) {
    galeria.classList.add("galeria--active");
    document.body.style.overflow = "hidden";

    const categoriaActiva = enlace.dataset.categoria;
    galeria.dataset.categoria = categoriaActiva;


    const fotos = dataFotos.fotos[categoriaActiva];

    const { id, nombre, ruta, descripcion } = fotos[0];
    cargarPicture(id, nombre, ruta, descripcion);

    console.log(fotos[0]);

    fotos.forEach((foto) => {
      const slide = `
        <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt="" />
        </a>
        `;
      galeria.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });

    galeria
      .querySelector(".galeria__carousel-slide")
      .classList.add("galeria__carousel-slide--active");
  }
});
