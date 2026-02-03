const Productos_Model = require('../models/productos_models');
let result;

class ProductosController {
  ingresar_producto(producto) {
    result = Productos_Model.ingresar_producto(producto);
    return result;
  }
}

module.exports = new ProductosController();