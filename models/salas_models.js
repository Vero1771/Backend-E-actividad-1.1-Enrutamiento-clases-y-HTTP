const salas = require('../db/salas');
let result;

class SalasModel {
  mostrar_salas() {
    if (salas.length > 0) {
      return result = {
        code: 200,
        message: "consulta completada con éxito",
        result: salas
      };
    } else {
      return result = {
        code: 404,
        message: "no hay salas registradas",
        result: []
      };
    }
  }
  ingresar_sala(sala) {
    let new_id;
    if (salas.length > 0) {
      new_id = salas[salas.length - 1].id + 1;
    } else {
      new_id = 1;
    }
    sala.id = new_id;
    salas.push(sala);
    return result = {
      code: 200,
      message: "sala agregada con éxito",
      result: salas
    };
  }
}

module.exports = new SalasModel();