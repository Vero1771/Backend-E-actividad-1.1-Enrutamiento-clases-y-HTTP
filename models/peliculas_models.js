const peliculas = require('../db/peliculas');
const funciones = require('../db/funciones');
const entradas = require('../db/entradas');
let result;

class PeliculasModel {
  mostrar_peliculas() {
    if (peliculas.length > 0) {
      result = {
        code: 200,
        message: "consulta completada con éxito",
        result: peliculas
      };
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
    if (peliculas.length > 0) {
      new_id = peliculas[peliculas.length - 1].id + 1;
    } else {
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
  editar_pelicula(id, actualizar) {
    if (peliculas.length > 0) {
      const index = peliculas.findIndex(p => p.id === Number(id));
      if (index !== -1) {
        peliculas[index] = actualizar;
        peliculas[index].id = Number(id);
        result = {
          code: 200,
          message: "película editada con éxito",
          result: peliculas[index]
        };
      } else {
        result = {
          code: 404,
          message: "no hay películas registradas con ese ID",
          result: []
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
  eliminar_pelicula(id) {
    if (peliculas.length > 0) {
      const idPeli = Number(id);
      const index = peliculas.findIndex(p => p.id === Number(id));
      if (index !== -1) {

        //Guardar los ID de todas las funciones de esa película antes de borrarlas
        const funcionesABorrar = funciones
          .filter(f => f.id_pelicula === idPeli)
          .map(f => f.id);

        //Colocar las entradas de esas funciones en Null
        entradas.forEach(entrada => {
          if (funcionesABorrar.includes(entrada.id_funcion)) {
            entrada.id_funcion = null;
          }
        });

        //Eliminar las funciones de la película
        for (let i = funciones.length - 1; i >= 0; i--) {
          if (funciones[i].id_pelicula === idPeli) {
            funciones.splice(i, 1);
          }
        }

        //Eliminar la película
        peliculas.splice(index, 1);

        result = {
          code: 200,
          message: "película eliminada con éxito",
          result: {
            funcionesEliminadas: funcionesABorrar.length,
            entradasDesvinculadas: "Proceso completado",
            data: peliculas
          }
        };
      } else {
        result = {
          code: 404,
          message: "no hay películas registradas con ese ID",
          result: []
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
}

module.exports = new PeliculasModel();