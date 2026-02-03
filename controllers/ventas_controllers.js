const Ventas_Model = require('../models/ventas_models');
let result;

class VentasController {
  ingresar_venta(venta) {
    result = Ventas_Model.ingresar_venta(venta);
    return result;
  }
}

module.exports = new VentasController();