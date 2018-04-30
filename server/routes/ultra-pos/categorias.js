var express = require('express');
var router = express.Router();
categorias = require('../../model/ultra-pos/categorias');
var WooCommerce = require('../../model/ultra-pos/_woocomerce');

router.get("/list2", function(req, res) {
    WooCommerce.get('products/categories?per_page=100&page=1', function(err, data, categoriasNovas) {
        if (err) {
            res.send(err);
        } else {
            res.send(categoriasNovas);
        }
    });
})

router.get("/list", function(req, res) {
    categorias.find({}, { _id: false, id: true, name: true },
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
})

module.exports = router;