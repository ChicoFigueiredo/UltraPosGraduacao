 categorias = require('../server/model/ultra-pos/categorias');
 var WooCommerce = require('../server/model/ultra-pos/_woocomerce');


 function processaPaginaCategoria(page = 1) {
     console.log('*********** PAGINA ' + page);
     WooCommerce.get('products/categories?per_page=10&page=' + page, function(err, data, res) {
         res = JSON.parse(res)
         console.log(JSON.stringify(res, null, 2));
         if (res.length > 0) {
             processaPaginaCategoria(page + 1)
         } else {
             process.exit(0);
         }
     });
     console.log('*********** FIM ' + page);
 }


 function processaPaginaProduto(page = 1) {
     console.log('*********** PAGINA ' + page);
     WooCommerce.get('products?per_page=10&page=' + page, function(err, data, res) {
         res = JSON.parse(res)
         console.log(JSON.stringify(res, null, 2));
         if (res.length > 0) {
             processaPaginaProduto(page + 1)
         } else {
             process.exit(0);
         }
     });
     console.log('*********** FIM ' + page);
 }


 processaPaginaCategoria(1);

 //processaPaginaProduto(1);