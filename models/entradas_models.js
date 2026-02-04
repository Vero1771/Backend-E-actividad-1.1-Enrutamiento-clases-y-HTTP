const entradas = require('../db/entradas');
let result;

class EntradasModel {
  mostrar_entradas() {
    if (entradas.length > 0) {
      return result = {
        code: 200,
        message: "consulta completada con éxito",
        result: entradas
      };
    } else {
      return result = {
        code: 404,
        message: "no hay entradas registradas",
        result: []
      };
    }
  }
  ingresar_entrada(entrada) {
    let new_id;
    if (entradas.length > 0) {
      new_id = entradas[entradas.length - 1].id + 1;
    } else {
      new_id = 1;
    }
    entrada.id = new_id;
    entradas.push(entrada);
    return result = {
      code: 200,
      message: "entrada agregada con éxito",
      result: entradas
    };
  }
}

module.exports = new EntradasModel();