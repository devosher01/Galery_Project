
const galeria = document.getElementById("galeria");

const cargarPicture = (id, name ,route, descripcion) => {
    galeria.querySelector('.galeria__imagen').src = route;
    galeria.querySelector('.galeria__imagen').dataset.idImage = id;
    galeria.querySelector('.galeria__titulo').innerHTML = name;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerHTML = descripcion;
}


export {cargarPicture};