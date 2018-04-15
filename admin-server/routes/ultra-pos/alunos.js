var express = require('express');
var router = express.Router();
var alunos = require('../../model/ultra-pos/alunos');

router
    .get("/summary", function(req, res) {
        alunos.aggregate([
                { $match: { eAtivo: true } },
                { $unwind: "$cursos" }, // unwind before match
                {
                    $group: {
                        _id: "$cpf",
                        ParcelasMensais: { $sum: '$cursos.pagamento.parcela' },
                        count: { $sum: 1 },
                    }
                },
                {
                    $group: {
                        _id: null,
                        alunos: { $sum: 1 },
                        estimativaParcelasMensais: { $sum: '$ParcelasMensais' },
                        parcelasTotais: { $sum: "$count" },
                    }
                }

            ],
            function(err, data) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(data);
                }
            });
    });

router.get("/list", function(req, res) {
    alunos.find({}, "cpf nome",
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
})


router.get("/find/:cpf", function(req, res) {
    alunos.find({ cpf: req.params.cpf }, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})

router.post("/save", function(req, res) {
    console.log("Salvar : " + req.body.cpf);
    alunos.find({ cpf: req.body.cpf }, function(err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
})




module.exports = router;