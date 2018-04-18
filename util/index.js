var fs = require('fs');

var WooCommerceAPI = require('woocommerce-api');

var WooCommerce = new WooCommerceAPI({
    url: 'http://ultraposgraduacao.com.br',
    consumerKey: 'ck_3ee8797c7d408b82cc22aff931b887b0f1d995fe',
    consumerSecret: 'cs_18b708e8cfc45ed6f0390697c4d4220f4bea0169',
    wpAPI: true,
    version: 'wc/v2',
    queryStringAuth: true, // Force Basic Authentication as query string true and using under HTTPS
});

// WooCommerce.get('coupons', function(err, data, res) {
//     console.log(JSON.stringify(JSON.parse(res), null, 2));
// });

function carregarCategoria(f) {
    var categorias = [];
    var strJson = fs.readFileSync('./json/categorias.json');
    var categorias = require("./json/categorias.json");

    categorias.forEach(cat => {

        console.log('')
        console.log('*************************************************************')
        console.log('Categoria: ' + cat.name.pt)
        let novaCategoria = {
            "name": cat.name.pt,
            "slug": cat.handle.pt,
        }
        WooCommerce.post('products/categories', novaCategoria, function(err, data, res) {
            console.log(JSON.stringify(JSON.parse(res), null, 2));
        });
    });
}

carregarCategoria();