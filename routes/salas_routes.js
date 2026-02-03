var express = require('express');
var router = express.Router();
const Salas_Controller = require('../controllers/salas_controllers');
let result;

/* (POST) Ingresar salas */
router.post('/ingresar', function(req, res, next) {
  result = Salas_Controller.ingresar_sala(req.body)
  res.status(result.code).send(result)
});

module.exports = router;