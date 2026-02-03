const productos = require('../db/productos');
let result;

class ProductosModel {
  ingresar_producto(producto) {
    let new_id;
    if(productos.length > 0){
      new_id = productos[productos.length -1].id + 1;
    }else {
      new_id = 1; 
    }
    producto.id = new_id;
    productos.push(producto);
    result = {
      code: 200,
      message: "producto agregado con éxito",
      result: productos
    };
    return result;
  }
}

module.exports = new ProductosModel();