var express = require('express');
var router = express.Router();

router.get("/initialize", function(req, res) {
    var dbAlunos = require('../../model/ultra-pos/alunos')(req.hostname, true);
    var dbCategorias = require('../../model/ultra-pos/categorias')(req.hostname, true);
    var dbCupom = require('../../model/ultra-pos/cupom')(req.hostname, true);
    var dbCursos = require('../../model/ultra-pos/cursos')(req.hostname, true);
    res.send({ foi: true });
})

module.exports = router;