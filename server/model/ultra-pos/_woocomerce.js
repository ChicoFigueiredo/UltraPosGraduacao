var WooCommerce;
var WooCommerceAPI = require('woocommerce-api');

module.exports = function(url = '') {
    WooCommerce = WooCommerce || new WooCommerceAPI({
        url: 'https://' + getWooCommerceURL(url = ''),
        consumerKey: 'ck_3ee8797c7d408b82cc22aff931b887b0f1d995fe',
        consumerSecret: 'cs_18b708e8cfc45ed6f0390697c4d4220f4bea0169',
        wpAPI: true,
        version: 'wc/v2',
        queryStringAuth: true, // Force Basic Authentication as query string true and using under HTTPS
    });

    return WooCommerce;

};


function getWooCommerceURL(url = '') {
    return (url === '' || url === 'localhost') ? 'ultraposgraduacao.com.br' : url.replace(/^inscricao[.]/gmi, '').replace(/^api[.]/gmi, '');
}