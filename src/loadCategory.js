import dataCategorias from "./data/categories";
const { categorias } = dataCategorias;

const contenedorCategorias = document.getElementById("categorias");

categorias.forEach((categoria) => {
  console.log(categoria.imagenPortada);
//   console.log(categoria);
  const nuevaCategoria = document.createElement("a");
  const plantilla = `
    <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${categoria.nombre}</p>
        <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
    </div>
    `;

  nuevaCategoria.innerHTML = plantilla;
  nuevaCategoria.classList.add("categoria");
  nuevaCategoria.href = "#";
  nuevaCategoria.dataset.categoria = categoria.id;

  contenedorCategorias.appendChild(nuevaCategoria);
});

// console.log(categorias);

// console.log("loding...");
