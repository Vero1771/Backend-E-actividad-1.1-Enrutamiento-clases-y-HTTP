var express = require('express');
var router = express.Router();
const Funciones_Controller = require('../controllers/funciones_controllers');
let result;

/* (GET) Mostrar las últimas 5 funciones recientes */
router.get('/funciones_recientes', function(req, res, next) {
  result = Funciones_Controller.mostrar_funciones_recientes()
  res.status(result.code).send(result)
});

/* (POST) Ingresar funciones */
router.post('/ingresar', function(req, res, next) {
  result = Funciones_Controller.ingresar_funcion(req.body)
  res.status(result.code).send(result)
});

module.exports = router;