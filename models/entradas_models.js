const entradas = require('../db/entradas');
let result;

class EntradasModel {
  ingresar_entrada(entrada) {
    let new_id;
    if(entradas.length > 0){
      new_id = entradas[entradas.length -1].id + 1;
    }else {
      new_id = 1; 
    }
    entrada.id = new_id;
    entradas.push(entrada);
    result = {
      code: 200,
      message: "entrada agregada con éxito",
      result: entradas
    };
    return result;
  }
}

module.exports = new EntradasModel();