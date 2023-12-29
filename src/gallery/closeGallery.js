const galeria = document.getElementById("galeria");

const cerrarGaleria = () => {
    console.log("Cerrar galeria");
    console.log("Cerrar galeria");
    galeria.classList.remove("galeria--active");

    document.body.style.overflow = "";
}


export default cerrarGaleria;