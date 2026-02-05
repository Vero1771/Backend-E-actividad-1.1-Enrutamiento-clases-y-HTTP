const productos = require('../db/productos');
const ventas_productos = require('../db/ventas_productos');
let result;

class ProductosModel {
  mostrar_productos() {
    if (productos.length > 0) {
      return result = {
        code: 200,
        message: "consulta completada con éxito",
        result: productos
      };
    } else {
      return result = {
        code: 404,
        message: "no hay productos registrados",
        result: []
      };
    }
  }
  mostrar_productos_por_id(id) {
    if (productos.length > 0) {
      const index = productos.findIndex(p => p.id === Number(id));
      if (index !== -1) {
        return result = {
          code: 200,
          message: "consulta completada con éxito",
          result: productos[index]
        };
      } else {
        return result = {
          code: 404,
          message: "no hay productos registrados con ese ID",
          result: []
        };
      }
    } else {
      return result = {
        code: 404,
        message: "no hay productos registrados",
        result: []
      };
    }
  }
  ingresar_producto(producto) {
    let new_id;
    if (productos.length > 0) {
      new_id = productos[productos.length - 1].id + 1;
    } else {
      new_id = 1;
    }
    productos.push({
      id: new_id,
      nombre: producto.nombre,
      cantidad: producto.cantidad,
      precio_unitario: producto.precio_unitario
    });
    return result = {
      code: 200,
      message: "producto agregado con éxito",
      result: productos
    };
  }
  editar_producto(id, actualizar) {
    if (productos.length > 0) {
      const index = productos.findIndex(p => p.id === Number(id));
      if (index !== -1) {
        productos[index] = actualizar;
        productos[index].id = Number(id);
        return result = {
          code: 200,
          message: "producto editado con éxito",
          result: productos[index]
        };
      } else {
        return result = {
          code: 404,
          message: "no hay productos registrados con ese ID",
          result: []
        };
      }
    } else {
      return result = {
        code: 404,
        message: "no hay productos registrados",
        result: []
      };
    }
  }
  eliminar_producto(id) {
    if (productos.length > 0) {
      const index = productos.findIndex(p => p.id === Number(id));
      if (index !== -1) {

        //Dejar en null las ventas de ese producto
        let ventas_count = 0;
        ventas_productos.forEach(venta => {
          if (venta.id_producto === Number(id)) {
            venta.id_producto = null;
            ventas_count++;
          }
        });

        //Eliminar el producto
        productos.splice(index, 1);

        return result = {
          code: 200,
          message: "producto eliminado con éxito",
          result: {
            ventasDesvinculadas: ventas_count,
            data: productos
          }
        };
      } else {
        return result = {
          code: 404,
          message: "no hay productos registrados con ese ID",
          result: []
        };
      }
    } else {
      return result = {
        code: 404,
        message: "no hay productos registrados",
        result: []
      };
    }
  }
}

module.exports = new ProductosModel();