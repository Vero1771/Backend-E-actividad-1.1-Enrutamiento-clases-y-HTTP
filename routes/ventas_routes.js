var express = require('express');
var router = express.Router();
const Ventas_Controller = require('../controllers/ventas_controllers');
let result;

/* (POST) Ingresar ventas */
router.post('/ingresar', function(req, res, next) {
  result = Ventas_Controller.ingresar_venta(req.body)
  res.status(result.code).send(result)
});

module.exports = router;