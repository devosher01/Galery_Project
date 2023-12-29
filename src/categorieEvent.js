import dataFotos from "./data/pictures";

const contenedorCategorias = document.getElementById("categorias");
const galeria = document.getElementById("galeria");

contenedorCategorias.addEventListener("click", (e) => {
  e.preventDefault();
  const enlace = e.target.closest("a");
  console.log(enlace);
  if (enlace) {
    galeria.classList.add("galeria--active");
    document.body.style.overflow = "hidden";

    const categoriaActiva = enlace.dataset.categoria;
    const fotos = dataFotos.fotos[categoriaActiva];

    console.log(fotos);

    fotos.forEach((foto) => {
      const slide = `
        <a href="#" class="galeria__carousel-slide">
            <img class="galeria__carousel-image" src="${foto.ruta}" alt="" />
        </a>
        `;
      galeria.querySelector(".galeria__carousel-slides").innerHTML += slide;
    });

    galeria.querySelector(".galeria__carousel-slide").classList.add('galeria__carousel-slide--active');
  }
});
