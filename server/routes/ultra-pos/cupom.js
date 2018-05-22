var express = require('express');
var router = express.Router();

router.get("/list", function(req, res) {
    var dbCupom = require('../../model/ultra-pos/cupom')(req.hostname);
    dbCupom.find({}, {}, //, 'categories.name.pt': true
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
})


router.get("/:banco/list", function(req, res) {
    var h = req.params.banco.replace(/db[_]pos[_]/gmi, '').replace(/[_]/gmi, '.');
    console.log('h=', h);
    var dbCupom = require('../../model/ultra-pos/cupom')(h);
    dbCupom.find({}, {}, //, 'categories.name.pt': true
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
})


router.get("/find/:codigoCupom", function(req, res) {
    var dbCupom = require('../../model/ultra-pos/cupom')(req.hostname);
    dbCupom.find({ codigoCupom: req.params.codigoCupom }, {}, //, 'categories.name.pt': true
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data[0]);
            }
        });
})


router.post("/calcula/:codigoCupom/:valor/:valorMatricula", function(req, res) {
    var dbCupom = require('../../model/ultra-pos/cupom')(req.hostname);
    dbCupom.find({ codigoCupom: req.params.codigoCupom }, //, 'categories.name.pt': true
        function(err, cupoms) {
            if (err) {
                res.send(err);
            } else {
                if (cupoms.length > 0) {
                    var cupom = cupoms[0];

                    if (cupom.tipoDesconto === 'valor') {

                        cupom.set('valorCalculado', Math.round(((Number(req.params.valor) - Number(cupom.valorDesconto))) * 100) / 100, { strict: false });
                        cupom.set('valorMatriculaCalculado', Math.round(((Number(req.params.valorMatricula) - Number(cupom.valorDescontoMatricula))) * 100) / 100, { strict: false });

                    } else if (cupom.tipoDesconto === 'percentual') {

                        cupom.set('valorCalculado', Math.round(((Number(req.params.valor) - Number(req.params.valor) * Number(cupom.percentualDesconto))) * 100) / 100, { strict: false });
                        cupom.set('valorMatriculaCalculado', Math.round(((Number(req.params.valorMatricula) - Number(req.params.valorMatricula) * Number(cupom.percentualDescontoMatricula))) * 100) / 100, { strict: false });

                    } else {

                        cupom.set('valorCalculado', Math.round(((Number(req.params.valor) - Number(cupom.valorDesconto))) * 100) / 100, { strict: false });
                        cupom.set('valorMatriculaCalculado', Math.round(((Number(req.params.valorMatricula) - Number(cupom.valorDescontoMatricula))) * 100) / 100, { strict: false });

                    }

                    res.send(cupom);
                } else {
                    res.status(404);
                    res.send({ error: true, msg: 'Cupom ' + req.params.codigoCupom + ' não encontrado na base de cupons, verifique a digitação ' })
                }


            }
        });
})




module.exports = router;