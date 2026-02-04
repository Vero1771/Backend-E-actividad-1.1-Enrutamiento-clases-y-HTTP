const peliculas = require('../db/peliculas');
const funciones = require('../db/funciones');
const entradas = require('../db/entradas');
let result;

class PeliculasModel {
  mostrar_peliculas() {
    if (peliculas.length > 0) {
      return result = {
        code: 200,
        message: "consulta completada con éxito",
        result: peliculas
      };
    } else {
      return result = {
        code: 404,
        message: "no hay películas registradas",
        result: []
      };
    }
  }
  mostrar_peliculas_por_id(id) {
    if (peliculas.length > 0) {
      const index = peliculas.findIndex(p => p.id === Number(id));
      if (index !== -1) {
        return result = {
          code: 200,
          message: "consulta completada con éxito",
          result: peliculas[index]
        };
      } else {
        return result = {
          code: 404,
          message: "no hay películas registradas con ese ID",
          result: []
        };
      }
    } else {
      return result = {
        code: 404,
        message: "no hay películas registradas",
        result: []
      };
    }
  }
  ingresar_pelicula(peli) {
    let new_id;
    if (peliculas.length > 0) {
      new_id = peliculas[peliculas.length - 1].id + 1;
    } else {
      new_id = 1;
    }

    if(typeof(peli.categoria) === "string"){ //En caso de que llegue una categoría por el checkbox
      peli.categoria = [peli.categoria];
    }

    peliculas.push({
      id: new_id,
      titulo: peli.titulo,
      anio: Number(peli.anio),
      duracion: Number(peli.duracion),
      categoria: peli.categoria,
      clasificacion: peli.clasificacion
    });

    return result = {
      code: 200,
      message: "película agregada con éxito",
      result: peliculas
    };
  }
  editar_pelicula(id, actualizar) {
    if (peliculas.length > 0) {
      const index = peliculas.findIndex(p => p.id === Number(id));
      if (index !== -1) {
        peliculas[index] = actualizar;
        peliculas[index].id = Number(id);
        return result = {
          code: 200,
          message: "película editada con éxito",
          result: peliculas[index]
        };
      } else {
        return result = {
          code: 404,
          message: "no hay películas registradas con ese ID",
          result: []
        };
      }
    } else {
      return result = {
        code: 404,
        message: "no hay películas registradas",
        result: []
      };
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
        let entradas_count = 0;
        entradas.forEach(entrada => {
          if (funcionesABorrar.includes(entrada.id_funcion)) {
            entrada.id_funcion = null;
            entradas_count++;
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

        return result = {
          code: 200,
          message: "película eliminada con éxito",
          result: {
            funcionesEliminadas: funcionesABorrar.length,
            entradasDesvinculadas: entradas_count,
            data: peliculas
          }
        };
      } else {
        return result = {
          code: 404,
          message: "no hay películas registradas con ese ID",
          result: []
        };
      }
    } else {
      return result = {
        code: 404,
        message: "no hay películas registradas",
        result: []
      };
    }
  }
}

module.exports = new PeliculasModel();