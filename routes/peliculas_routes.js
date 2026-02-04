var express = require('express');
var router = express.Router();
const Peliculas_Controller = require('../controllers/peliculas_controllers');
let result;

/* (GET) Mostrar todas las películas */
router.get('/', function(req, res, next) {
  result = Peliculas_Controller.mostrar_peliculas()
  res.status(result.code).send(result)
});

/* (GET) Mostrar películas por su ID */
router.get('/:id', function(req, res, next) {
  result = Peliculas_Controller.mostrar_peliculas_por_id(req.params.id)
  res.status(result.code).send(result)
});

/* (POST) Ingresar películas */
router.post('/ingresar', function(req, res, next) {
  result = Peliculas_Controller.ingresar_pelicula(req.body)
  res.status(result.code).send(result)
});

/* (DELETE) Eliminar películas por su ID */
router.delete('/eliminar/:id', function(req, res, next) {
  result = Peliculas_Controller.eliminar_pelicula(req.params.id)
  res.status(result.code).send(result)
});

module.exports = router;