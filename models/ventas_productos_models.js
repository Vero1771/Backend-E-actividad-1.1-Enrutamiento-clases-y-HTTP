const ventas_productos = require('../db/ventas_productos');
let result;

class VentasProductosModel {
  mostrar_productos_vendidos() {
    if (ventas_productos.length > 0) {
      return result = {
        code: 200,
        message: "consulta completada con éxito",
        result: ventas_productos
      };
    } else {
      return result = {
        code: 404,
        message: "no hay ventas de productos registradas",
        result: []
      };
    }
  }
  ingresar_producto_vendido(producto) {
    let new_id;
    if (ventas_productos.length > 0) {
      new_id = ventas_productos[ventas_productos.length - 1].id + 1;
    } else {
      new_id = 1;
    }
    producto.id = new_id;
    ventas_productos.push(producto);
    return result = {
      code: 200,
      message: "venta del producto agregada con éxito",
      result: ventas_productos
    };
  }
}

module.exports = new VentasProductosModel();