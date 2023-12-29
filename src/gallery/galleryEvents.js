import cerrarGaleria from "./closeGallery";
import slideClick from "./slideClick";

const galeria = document.getElementById("galeria");

galeria.addEventListener("click", (e) => {
  const boton = e.target.closest("button");

  // Cerrar galeria
  if (boton?.dataset.accion === "cerrar-galeria") {
    cerrarGaleria();
  }

  // --- Carrusel slide Click
  if(e.target.dataset.id){
    slideClick(e);
  }

  
});
