categorias = require('../server/model/ultra-pos/categorias');
cursos = require('../server/model/ultra-pos/cursos');
var WooCommerce = require('../server/model/ultra-pos/_woocomerce');

/**
 * CAPTURANDO CATEGORIAS
 */

function processaPaginaCategoria(page = 1) {
    console.log('*********** PAGINA ' + page);
    WooCommerce.get('products/categories?per_page=10&page=' + page, function(err, data, res) {
        res = JSON.parse(res)
            //console.log(JSON.stringify(res, null, 2));
        if (res.length > 0) {
            res.forEach(ct => {
                console.log(' do ct ' + ct.id)
                var nc = {
                    "id": ct.id,
                    "name": {
                        "pt": ct.name
                    },
                    "description": {
                        "pt": ct.description
                    },
                    "handle": {
                        "pt": ct.slug
                    },
                    "parent": ct.parent,
                    "subcategories": [],
                    "seo_title": {
                        "pt": null
                    },
                    "seo_description": {
                        "pt": null
                    },
                    published: true
                }

                categorias.findOneAndUpdate({ id: ct.id }, // find a document with that filter
                    nc, // document to insert when nothing was found
                    { upsert: true, new: false, runValidators: true, strict: true }, // options
                    function(err, cat) { // callback
                        if (err) {
                            console.log('fudeu ' + JSON.stringify(err));
                            return;
                        }
                        console.log('Foi ct ' + cat.id)
                    });
            });
            processaPaginaCategoria(page + 1)
        } else {
            //process.exit(0);
            console.log('waiting...')
        }
    });
    console.log('*********** FIM ' + page);
}

/**
 * CAPTURANDO CURSOS
 */

function getCategoriasCursos(mt) {
    var mt2 = [];
    mt.forEach(c => {
        mt2.push({ "id": c.id })
    })
    return mt2;
}

function processaPaginaProduto(page = 1) {
    console.log('*********** PAGINA ' + page);
    WooCommerce.get('products?per_page=10&page=' + page, function(err, data, res) {
        res = JSON.parse(res)
            //console.log(JSON.stringify(res, null, 2));
        if (res.length > 0) {
            res.forEach(cu => {
                console.log(' do cu ' + cu.id)
                var nc = {
                    "id": cu.id,
                    "name": {
                        "pt": cu.name
                    },
                    "description": {
                        "pt": cu.description
                    },
                    "handle": {
                        "pt": cu.slug
                    },
                    "attributes": [],
                    "published": (cu.status == 'publish'),
                    "free_shipping": false,
                    "brand": null,
                    "tags": "",
                    "categories": getCategoriasCursos(cu.categories),
                    "variants": [{
                        "id": cu.id * 10000 + 1,
                        "image_id": null,
                        "product_id": cu.id,
                        "position": 1,
                        "price": cu.price,
                        "promotional_price": null,
                        "stock_management": false,
                        "stock": null,
                        "weight": "0.000",
                        "width": "0.00",
                        "height": "0.00",
                        "depth": "0.00",
                        "sku": null,
                        "values": [],
                        "barcode": null
                    }]
                }

                cursos.findOneAndUpdate({ id: nc.id }, // find a document with that filter
                    nc, // document to insert when nothing was found
                    { upsert: true }, //, new: false, runValidators: true, strict: true }, // options
                    function(err, alunos) { // callback
                        if (err) {
                            console.log('fudeu ' + JSON.stringify(err));
                        }
                        console.log('Foi cu ' + nc.id)
                    });
            });
            processaPaginaProduto(page + 1)
        } else {
            console.log('waiting...');
            //process.exit(0);
        }
    });
    console.log('*********** FIM ' + page);
}


processaPaginaCategoria(1);

processaPaginaProduto(1);

setTimeout(() => {
    process.exit(0);
}, 60000 * 3);