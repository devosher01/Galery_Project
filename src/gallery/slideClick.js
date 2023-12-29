import datos from "./../data/pictures"
import { cargarPicture } from "./loadPicture";

const slideClick = (e) => {
  const id = parseInt(e.target.dataset.id);
  const galeria = document.getElementById("galeria");

  const categoriaActiva = galeria.dataset.categoria;

//   console.log("Hiciste click en el slide ", id, categoriaActiva);


    datos.fotos[categoriaActiva].forEach(element => {
        if(element.id === id){
            const {id, nombre, ruta, descripcion} = element;
            cargarPicture(id, nombre, ruta, descripcion);
        }
    });
};

export default slideClick;
