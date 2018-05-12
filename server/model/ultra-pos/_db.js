module.exports = function(url) {
    console.log('URL :', url, ' - ', urlToDatabase(url));
    var mongo = require('mongoose');

    // var db = mongo.connect("mongodb://localhost:27017/UltraPosGraduacao", function(err, response) {
    var db = mongo.connect("mongodb://localhost:27017/" + urlToDatabase(url), function(err, response) {

    });

    return mongo;
};



function urlToDatabase(url = '') {
    return url === '' ? 'UltraPosGraduacao' : 'db_pos_' + url.replace(/^\s+|\s+$|\s+(?=\s)/gmi, '').replace(/[^a-zA-Z0-9]/gmi, '_');
}