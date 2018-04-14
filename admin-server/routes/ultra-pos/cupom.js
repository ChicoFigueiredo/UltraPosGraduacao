var express = require('express');
var router = express.Router();
var cupom = require('../../model/ultra-pos/cupom');

router.get("/list", function(req, res) {
    cupom.find({}, {}, //, 'categories.name.pt': true
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
})


router.get("/find/:codigoCupom", function(req, res) {
    cupom.find({ codigoCupom: req.params.codigoCupom }, {}, //, 'categories.name.pt': true
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data[0]);
            }
        });
})


router.get("/processa/:codigoCupom/:valor/:valorMatricula", function(req, res) {
    cupom.find({ codigoCupom: req.params.codigoCupom }, {}, //, 'categories.name.pt': true
        function(err, cupom) {
            if (err) {
                res.send(err);
            } else {
                try {
                    cupom = cupom.toObject();
                    cupom.valorCalculado = 0;
                    cupom.valorCavalorMatriculaCalculadolculado = 0;
                    if (cupom.tipoDesconto === 'valor') {
                        cupom.valorCalculado = Math.round(((Number(req.params.valor) - Number(cupom.valorDesconto))) * 100) / 100;
                        cupom.valorMatriculaCalculado = Math.round(((Number(req.params.valorMatricula) - Number(cupom.valorDescontoMatricula))) * 100) / 100;
                    } else if (cupom.tipoDesconto === 'percentual') {
                        cupom.valorCalculado = Math.round(((Number(req.params.valor) - Number(req.params.valor) * Number(cupom.valorDesconto))) * 100) / 100;
                        cupom.valorMatriculaCalculado = Math.round(((Number(req.params.valorMatricula) - Number(req.params.valorMatricula) * Number(cupom.valorDescontoMatricula))) * 100) / 100;
                    } else {
                        cupom.valorCalculado = Math.round(((Number(req.params.valor) - Number(cupom.valorDesconto))) * 100) / 100;
                        cupom.valorMatriculaCalculado = Math.round(((Number(req.params.valorMatricula) - Number(cupom.valorDescontoMatricula))) * 100) / 100;
                    }
                    console.log(JSON.stringify(cupom));
                    res.send(cupom);
                } catch (e) {
                    res.send(e);
                }

            }
        });
})

module.exports = router;