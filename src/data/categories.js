import data from "./pictures";
const { fotos } = data;

export default {
    categorias: [
        {
            id: "america",
            nombre: "America",
            numeroFotos: fotos["america"]?.length || 0,
            imagenPortada: "./img/america.jpg",
        },
        {
            id: "europa",
            nombre: "Europa",
            numeroFotos: fotos["europa"]?.length || 0,
            imagenPortada: "./img/europa.jpg",
        },
        {
            id: "africa",
            nombre: "África",
            numeroFotos: fotos["africa"]?.length || 0,
            imagenPortada: "./img/africa.jpg",
        },
        {
            id: "asia",
            nombre: "Asia",
            numeroFotos: fotos["asia"]?.length || 0,
            imagenPortada: "./img/asia.jpg",
        },
        {
            id: "oceania",
            nombre: "Oceania",
            numeroFotos: fotos["oceania"]?.length || 0,
            imagenPortada: "./img/oceania.jpg",
        },
        {
            id: "antartida",
            nombre: "Antártida",
            numeroFotos: fotos["antartida"]?.length || 0,
            imagenPortada: "./img/antartida.jpg",
        },
    ],
};