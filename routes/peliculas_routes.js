var express = require('express');
var router = express.Router();
const Peliculas_Controller = require('../controllers/peliculas_controllers');

/* (GET) Mostrar películas por su ID */
router.get('/:id', function(req, res, next) {
  let result = Peliculas_Controller.mostrar_peliculas_por_id(req.params.id)
  res.status(result.code).send(result)
});

module.exports = router;