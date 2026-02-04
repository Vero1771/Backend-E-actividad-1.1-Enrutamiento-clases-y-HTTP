const funciones = require('../db/funciones');
let result;

class FuncionesModel {
  mostrar_funciones() {
    if (funciones.length > 0) {
      result = {
        code: 200,
        message: "consulta completada con éxito",
        result: funciones
      };
      return result;
    } else {
      result = {
        code: 404,
        message: "no hay funciones registradas",
        result: undefined
      };
      return result;
    }
  }
  mostrar_funciones_recientes() {
    if (funciones.length > 0) {

      const funcionesRecientes = funciones
        .sort((a, b) => new Date(b.fecha_hora) - new Date(a.fecha_hora))
        .slice(0, 5);

      result = {
        code: 200,
        message: "consulta completada con éxito",
        result: funcionesRecientes
      };

      return result;
    } else {
      result = {
        code: 404,
        message: "no hay funciones registradas",
        result: undefined
      };
      return result;
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
    result = {
      code: 200,
      message: "función agregada con éxito",
      result: funciones
    };
    return result;
  }
}

module.exports = new FuncionesModel();