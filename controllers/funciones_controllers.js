const Funciones_Model = require('../models/funciones_models');
let result;

class FuncionesController {
  ingresar_funcion(funcion) {
    result = Funciones_Model.ingresar_funcion(funcion);
    return result;
  }
}

module.exports = new FuncionesController();