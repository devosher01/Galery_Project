const contenedorCategorias = document.getElementById("categorias");

contenedorCategorias.addEventListener("click", (e) => {
  e.preventDefault();
  const categoria = e.target.dataset.categoria;
  if (categoria) {
    // console.log(categoria);
    localStorage.setItem("categoria", categoria);
    window.location.href = "./galeria.html";
  }
});
