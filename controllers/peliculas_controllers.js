const Peliculas_Model = require('../models/peliculas_model');

class PeliculasController {
  mostrar_peliculas_por_id(id) {
    let result = Peliculas_Model.mostrar_peliculas_por_id(id);
    return result;
  }
}

module.exports = new PeliculasController();