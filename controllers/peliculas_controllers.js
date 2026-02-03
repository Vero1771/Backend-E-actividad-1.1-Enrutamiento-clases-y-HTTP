const Peliculas_Model = require('../models/peliculas_models');
let result;

class PeliculasController {
  mostrar_peliculas_por_id(id) {
    result = Peliculas_Model.mostrar_peliculas_por_id(id);
    return result;
  }
  ingresar_pelicula(peli) {
    result = Peliculas_Model.ingresar_pelicula(peli);
    return result;
  }
}

module.exports = new PeliculasController();