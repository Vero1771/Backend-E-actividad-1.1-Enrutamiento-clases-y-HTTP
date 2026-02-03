const peliculas = require('../db/peliculas');
let result;

class PeliculasModel {
  mostrar_peliculas_por_id(id) {
    if (peliculas.length > 0) {
      let search_result = [];
      for (let i = 0; i < peliculas.length; i++) {
        if (peliculas[i].id === Number(id)) {
          search_result.push(peliculas[i])
        }
      }
      if (search_result.length > 0) {
        result = {
          code: 200,
          message: "consulta completada con éxito",
          result: search_result
        };
      } else {
        result = {
          code: 404,
          message: "no hay películas registradas con ese ID",
          result: search_result
        };
      }
      return result;
    } else {
      result = {
        code: 404,
        message: "no hay películas registradas",
        result: undefined
      };
      return result;
    }
  }
  ingresar_pelicula(peli) {
    let new_id;
    if(peliculas.length > 0){
      new_id = peliculas[peliculas.length -1].id + 1;
    }else {
      new_id = 1; 
    }
    peli.id = new_id;
    peliculas.push(peli);
    result = {
      code: 200,
      message: "película agregada con éxito",
      result: peliculas
    };
    return result;
  }
}

module.exports = new PeliculasModel();