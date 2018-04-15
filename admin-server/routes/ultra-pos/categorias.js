var express = require('express');
var router = express.Router();
categorias = require('../../model/ultra-pos/categorias');

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