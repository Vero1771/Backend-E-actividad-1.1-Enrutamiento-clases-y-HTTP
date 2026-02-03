const Salas_Model = require('../models/salas_models');
let result;

class SalasController {
  ingresar_sala(sala) {
    result = Salas_Model.ingresar_sala(sala);
    return result;
  }
}

module.exports = new SalasController();