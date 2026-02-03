const funciones = require('../db/funciones');
let result;

class FuncionesModel {
  ingresar_funcion(funcion) {
    let new_id;
    if(funciones.length > 0){
      new_id = funciones[funciones.length -1].id + 1;
    }else {
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