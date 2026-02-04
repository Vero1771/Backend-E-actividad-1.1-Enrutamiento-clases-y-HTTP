const productos = require('../db/productos');
let result;

class ProductosModel {
  mostrar_productos() {
    if (productos.length > 0) {
      result = {
        code: 200,
        message: "consulta completada con éxito",
        result: productos
      };
      return result;
    } else {
      result = {
        code: 404,
        message: "no hay productos registrados",
        result: undefined
      };
      return result;
    }
  }
  ingresar_producto(producto) {
    let new_id;
    if (productos.length > 0) {
      new_id = productos[productos.length - 1].id + 1;
    } else {
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
  editar_producto(id, actualizar) {
    if (productos.length > 0) {
      const index = productos.findIndex(p => p.id === Number(id));
      if (index !== -1) {
        productos[index] = actualizar;
        productos[index].id = Number(id);
        result = {
          code: 200,
          message: "producto editado con éxito",
          result: productos[index]
        };
      } else {
        result = {
          code: 404,
          message: "no hay productos registrados con ese ID",
          result: []
        };
      }
      return result;
    } else {
      result = {
        code: 404,
        message: "no hay productos registrados",
        result: undefined
      };
      return result;
    }
  }
  eliminar_producto(id) {
    if (productos.length > 0) {
      const index = productos.findIndex(p => p.id === Number(id));
      if (index !== -1) {
        productos.splice(index, 1);
        result = {
          code: 200,
          message: "producto eliminado con éxito",
          result: productos
        };
      } else {
        result = {
          code: 404,
          message: "no hay productos registrados con ese ID",
          result: []
        };
      }
      return result;
    } else {
      result = {
        code: 404,
        message: "no hay productos registrados",
        result: undefined
      };
      return result;
    }
  }
}

module.exports = new ProductosModel();