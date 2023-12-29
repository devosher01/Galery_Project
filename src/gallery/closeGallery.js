const galeria = document.getElementById("galeria");

const cerrarGaleria = () => {
    console.log("Cerrar galeria");
    galeria.classList.remove("galeria--active");

    document.body.style.overflow = "";
    galeria.querySelector(".galeria__carousel-slides").innerHTML = "";
}


export default cerrarGaleria;

 