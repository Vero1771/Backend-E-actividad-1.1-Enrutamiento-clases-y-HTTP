const ventas = require('../db/ventas');
let result;

class VentasModel {
  ingresar_venta(venta) {
    let new_id;
    if(ventas.length > 0){
      new_id = ventas[ventas.length -1].id + 1;
    }else {
      new_id = 1; 
    }
    venta.id = new_id;
    ventas.push(venta);
    result = {
      code: 200,
      message: "venta agregada con éxito",
      result: ventas
    };
    return result;
  }
}

module.exports = new VentasModel();