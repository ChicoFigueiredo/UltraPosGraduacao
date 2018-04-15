var express = require('express');
var router = express.Router();
var cursos = require('../../model/ultra-pos/cursos');

router.get("/list", function(req, res) {
    cursos.find({ published: true }, { _id: false, id: true, name: true, 'categories.id': true, 'variants': true, }, //, 'categories.name.pt': true
        function(err, data) {
            if (err) {
                res.send(err);
            } else {
                res.send(data);
            }
        });
})

module.exports = router;