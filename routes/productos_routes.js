var express = require('express');
var router = express.Router();
const Productos_Controller = require('../controllers/productos_controllers');
let result;

/* (GET) Mostrar todos los productos */
router.get('/', function(req, res, next) {
  result = Productos_Controller.mostrar_productos()
  res.status(result.code).send(result)
});

/* (POST) Ingresar productos */
router.post('/ingresar', function(req, res, next) {
  result = Productos_Controller.ingresar_producto(req.body)
  res.status(result.code).send(result)
});

/* (DELETE) Eliminar productos por su ID */
router.delete('/eliminar/:id', function(req, res, next) {
  result = Productos_Controller.eliminar_producto(req.params.id)
  res.status(result.code).send(result)
});

module.exports = router;