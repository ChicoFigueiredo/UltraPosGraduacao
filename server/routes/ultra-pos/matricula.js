var express = require('express');
var router = express.Router();
var alunos = require('../../model/ultra-pos/alunos');
const Vindi = require('vindi-js');

const cVindi = new Vindi('QzaLFAj4fOwgEjgNeDzOZzKtk40ygxxjhZ0xvMj0yU8');


router.post("/inscrever", function(req, res) {
    const al = req.body.aluno;
    const cu = req.body.curso;
    console.log("Salvar : " + al.cpf);
    let ret = {};

    alunos.findOneAndUpdate({ cpf: al.cpf }, // find a document with that filter
        al, // document to insert when nothing was found
        { upsert: true, new: false, runValidators: true }, // options
        function(err, alunos) { // callback
            if (err) {
                console.log('fudeu ' + JSON.stringify(err));
                res.send(err);
            } else {
                let cliVindi = {
                    "id": null,
                    "name": al.nome,
                    "email": al.email,
                    "registry_code": al.cpf.replace(/\D/gmi, ''),
                    "code": al.cpf,
                    "notes": "",
                    "status": "active",
                    "address": {
                        "street": al.endereco,
                        "number": al.numero,
                        "additional_details": al.complemento,
                        "zipcode": al.cep.replace(/\D/gmi, ''),
                        "neighborhood": al.bairro,
                        "city": al.cidade,
                        "state": al.uf,
                        "country": 'BR'
                    },
                    "phones": [{
                        "phone_type": "mobile",
                        "number": al.whatsapp.replace(/\D/gmi, ''),
                        "extension": null
                    }, {
                        "phone_type": "mobile",
                        "number": al.celular.replace(/\D/gmi, ''),
                        "extension": null
                    }]
                };
                cVindi.get({ uri: '/api/v1/customers', debug: false }, 'registry_code:' + cliVindi.registry_code).then((clis) => {
                    if (clis.customers.length > 0) { // Cliente Encontrado
                        //res.send(cli.customers[0]);
                        const cli = clis.customers[0];
                        cliVindi.id = cli.id;
                        console.log('teste-id:', cliVindi.id);
                        cli.phones.forEach(e => { // deleta os telefones anteriores
                            cliVindi.phones.push({ id: e.id, _destroy: 1 });
                        });
                        cVindi.put({ uri: '/api/v1/customers/' + cli.id, debug: false }, cliVindi).then((clis2) => {
                            console.log('clis2: ', clis2);
                            const cli2 = clis2.customer;
                            ret.cli2 = cli2;
                            geraFaturamentoImediatoEAssinatura(cli2.id);
                        }).catch((err) => {
                            console.error('error', err);
                            res.send(err);
                        });
                    } else { // Cliente Não Encontrado, novo cliente / cadastra
                        cVindi.post({ uri: '/api/v1/customers', debug: false }, cliVindi).then((clis2) => {
                            const cli2 = clis2.customer;
                            console.log('cli2: ', cli2);
                            ret.cli2 = cli2;
                            geraFaturamentoImediatoEAssinatura(cli2.id);
                        }).catch((err) => {
                            console.error('error', err);
                            res.send(err);
                        });
                    }
                }).catch((err) => {
                    console.error('error', err);
                    res.send(err);
                })
            }
        });

    function geraFaturamentoImediatoEAssinatura(idCli) {
        let cobrarEm = new Date((new Date()).setHours(23, 59, 59, 999));
        cobrarEm = (new Date(cobrarEm.setDate(cobrarEm.getDate() + 7))); // formato final deve ser "2018-05-10T23:59:59.000-03:00"
        let fatura = {
            "customer_id": idCli,
            "payment_method_code": cu.pagamento.formaPagamento === 'boleto' ? 'bank_slip' : '',
            "due_at": cobrarEm.toISOString().replace('Z', '-03:00'),
            "bill_items": [{
                "product_id": 215139, // TIRAR HARD CODE
                "amount": cu.pagamento.valorCobrado / cu.pagamento.parcelamento
            }]
        };

        if (cu.pagamento.taxaMatricula > 0) {
            fatura.bill_items.push({
                "product_id": 196780,
                "amount": cu.pagamento.taxaMatricula
            })
        }
        console.log('fatura: ', fatura);
        cVindi.post({ uri: '/api/v1//bills', debug: false }, fatura).then((fat) => {
            ret.fat = fat;
            cobrarEm = cobrarEm; // Ajuste de data
            if (cu.pagamento.parcelamento > 1) {
                let assinatura = {
                    "plan_id": 61639, // HARD CODE
                    "start_at": cobrarEm,
                    "customer_id": idCli,
                    "payment_method_code": "bank_slip",
                    "billing_trigger_type": "day_of_month",
                    "billing_trigger_day": cu.pagamento.melhorDia,
                    "billing_cycles": (cu.pagamento.parcelamento - 1),
                    "product_items": [{
                        "product_id": 215139,
                        "cycles": (cu.pagamento.parcelamento - 1),
                        "pricing_schema": {
                            "price": cu.pagamento.valorCobrado / cu.pagamento.parcelamento,
                            "schema_type": "flat"
                        }

                    }]
                };
                cVindi.post({ uri: '/api/v1//subscriptions', debug: false }, assinatura).then((sub) => {
                    ret.sub = sub;
                    res.send(ret);
                }).catch((err) => {
                    console.error('error', err);
                    res.send(err);
                });
            } else {
                res.send(ret);
            }
        }).catch((err) => {
            console.error('error', err);
            res.send(err);
        });

    }
});



module.exports = router;