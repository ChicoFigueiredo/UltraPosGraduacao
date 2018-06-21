var jwt = require('jsonwebtoken');
var config = require('../config/config');

// Assim como qualquer middleware, é quintessencial chamarmos next()
// Se o usuário estiver autenticado
module.exports = function(req, res, next) {
    //console.log(JSON.stringify(req.headers));
    const token = req.headers.authorization.replace('Bearer ', '');
    //if (req.isAuthenticated()) {
    try {
        var decoded = jwt.verify(token, config.get('secret'));
        if (decoded.exp > dateNow.getTime()) {
            return next();
        } else {
            res.status(403).send({ Ok: false, msg: 'Acesso negado - tk-expires' });
        }
    } catch (err) {
        res.status(403).send({ Ok: false, msg: 'Acesso negado - tk-error' });
    }
    // } else {
    //     res.status(403).send({ Ok: false, msg: 'Acesso negado' });
    // }
}