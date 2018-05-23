var mongo = {};
var db = {};

module.exports = function(url) {
    console.log('URL :', url, ' - ', urlToDatabase(url));
    mongo[url] = mongo[url] || require('mongoose');

    // var db = mongo.connect("mongodb://localhost:27017/UltraPosGraduacao", function(err, response) {
    db[url] = db[url] || mongo[url].connect("mongodb://localhost:27017/" + urlToDatabase(url), { socketOptions: { socketTimeoutMS: 0, connectionTimeout: 0 } },
        function(err, response) {

        });

    return mongo[url];
};



function urlToDatabase(url = '') {
    return url === '' ? 'UltraPosGraduacao' :
        'db_pos_' + url.replace(/^\s+|\s+$|\s+(?=\s)/gmi, '')
        .replace(/[^a-zA-Z0-9]/gmi, '_')
        .replace(/inscricao[_]/gmi, '')
        .replace(/api[_]/gmi, '');
}