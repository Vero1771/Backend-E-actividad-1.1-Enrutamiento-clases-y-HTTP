var express = require('express');
var router = express.Router();
const Entradas_Controller = require('../controllers/entradas_controllers');
let result;

/* (POST) Ingresar entradas */
router.post('/ingresar', function(req, res, next) {
  result = Entradas_Controller.ingresar_entrada(req.body)
  res.status(result.code).send(result)
});

module.exports = router;