const funciones = require('../db/funciones');
let result;

class FuncionesModel {
  mostrar_funciones() {
    if (funciones.length > 0) {
      return result = {
        code: 200,
        message: "consulta completada con éxito",
        result: funciones
      };
    } else {
      return result = {
        code: 404,
        message: "no hay funciones registradas",
        result: []
      };
    }
  }
  mostrar_funciones_recientes() {
    if (funciones.length > 0) {

      const funcionesRecientes = [...funciones]
        .sort((a, b) => new Date(b.fecha_hora) - new Date(a.fecha_hora))
        .slice(0, 5);

      return result = {
        code: 200,
        message: "consulta completada con éxito",
        result: funcionesRecientes
      };

    } else {
      return result = {
        code: 404,
        message: "no hay funciones registradas",
        result: []
      };
    }
  }
  ingresar_funcion(funcion) {
    let new_id;
    if (funciones.length > 0) {
      new_id = funciones[funciones.length - 1].id + 1;
    } else {
      new_id = 1;
    }
    funcion.id = new_id;
    funciones.push(funcion);
    return result = {
      code: 200,
      message: "función agregada con éxito",
      result: funciones
    };
  }
}

module.exports = new FuncionesModel();