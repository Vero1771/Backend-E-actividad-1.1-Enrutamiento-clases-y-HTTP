var express = require('express');
var router = express.Router();
const Funciones_Controller = require('../controllers/funciones_controllers');
let result;

/* (POST) Ingresar funciones */
router.post('/ingresar', function(req, res, next) {
  result = Funciones_Controller.ingresar_funcion(req.body)
  res.status(result.code).send(result)
});

module.exports = router;