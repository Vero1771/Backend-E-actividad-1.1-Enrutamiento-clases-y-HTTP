var express = require('express');
var router = express.Router();
const Productos_Controller = require('../controllers/productos_controllers');
let result;

/* (POST) Ingresar productos */
router.post('/ingresar', function(req, res, next) {
  result = Productos_Controller.ingresar_producto(req.body)
  res.status(result.code).send(result)
});

module.exports = router;