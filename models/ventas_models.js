const ventas = require('../db/ventas');
let result;

class VentasModel {
  mostrar_ventas_por_rango(rango) {

    //Verificar que hay fecha de inicio y fin
    const { inicio, fin } = rango;
    if (!inicio || !fin) {
      return result = {
        code: 400,
        message: "Falta el rango de fechas",
        result: []
      };
    }

    if (ventas.length > 0) {

      const fechaInicio = new Date(inicio);
      const fechaFin = new Date(fin);

      // Validar el formato de la fecha 
      if (isNaN(fechaInicio.getTime()) || isNaN(fechaFin.getTime())) {
        return result = {
          code: 400,
          message: "El formato de la fecha es inválido",
          result: []
        };
      }

      // Validar que la Fecha de Inicio sea mayor
      if (fechaInicio > fechaFin) {
        return result = {
          code: 400,
          message: "La fecha de inicio no puede ser mayor a la fecha de fin",
          result: []
        };
      }

      const ventasRecientes = ventas.filter(venta => {
        const soloFechaVenta = venta.fecha.split(' ')[0];
        return soloFechaVenta >= inicio && soloFechaVenta <= fin;
      }).sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

      return result = {
        code: 200,
        message: "consulta completada con éxito",
        result: ventasRecientes
      };

    } else {
      return result = {
        code: 404,
        message: "no hay ventas registradas",
        result: []
      };
    }
  }
  ingresar_venta(venta) {
    let new_id;
    if (ventas.length > 0) {
      new_id = ventas[ventas.length - 1].id + 1;
    } else {
      new_id = 1;
    }
    venta.id = new_id;
    ventas.push(venta);
    return result = {
      code: 200,
      message: "venta agregada con éxito",
      result: ventas
    };
  }
}

module.exports = new VentasModel();