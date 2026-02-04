const salas = require('../db/salas');
let result;

class SalasModel {
  ingresar_sala(sala) {
    let new_id;
    if(salas.length > 0){
      new_id = salas[salas.length -1].id + 1;
    }else {
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