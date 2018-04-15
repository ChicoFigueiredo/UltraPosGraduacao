var mongo = require('./_db');

var LinguagemSchema = mongo.Schema({
    pt: { type: String, required: false, trim: true },
    es: { type: String, required: false, trim: true },
    en: { type: String, required: false, trim: true },
}, { versionKey: false, _id: false, strict: false });

var CategoriesSchema = mongo.Schema({
    id: { type: Number, required: true, trim: true, index: true, unique: true },
    name: LinguagemSchema,
    description: LinguagemSchema,
    handle: LinguagemSchema,
    parent: { type: Number, trim: true },
    subcategories: [],
    seo_title: LinguagemSchema,
    seo_description: LinguagemSchema,
    created_at: { type: String, required: true, trim: true },
    updated_at: { type: String, required: true, trim: true },
}, { versionKey: false, _id: true });

var model = mongo.model('categorias', CategoriesSchema, 'categorias');

module.exports = model;

// var na = {
//     "id": 2250509,
//     "name": {
//         "pt": "MEIO AMBIENTE"
//     },
//     "description": {
//         "pt": ""
//     },
//     "handle": {
//         "pt": "meio-ambiente"
//     },
//     "parent": 0,
//     "subcategories": [],
//     "seo_title": {
//         "pt": null
//     },
//     "seo_description": {
//         "pt": null
//     },
//     "created_at": "2017-09-10T14:00:30+00:00",
//     "updated_at": "2018-03-22T00:47:18+00:00"
// }

// model.findOneAndUpdate({ id: 21421838 }, // find a document with that filter
//     na, // document to insert when nothing was found
//     { upsert: true, new: false, runValidators: true, strict: true }, // options
//     function(err, alunos) { // callback
//         if (err) {
//             console.log('fudeu ' + JSON.stringify(err));
//         }
//     });