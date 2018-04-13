var mongo = require('./_db');

// var Schema = mongo.Schema;
var AlunoCursoCupomSchema = mongo.Schema({
    codigoCupom: { type: String, required: true, trim: true },
    origemCupom: { type: String, required: true, trim: true },
    tipoDesconto: { type: String, required: true, trim: true },
    valorDesconto: { type: Number, required: true, default: 0 },
    percentualDesconto: { type: Number, required: true, default: 0 },
}, { versionKey: false, _id: false }); // _id=false impede criar objectid em memoria antes de salvar

var DadosCartaoSchema = mongo.Schema({
    numero: { type: String, required: true, trim: true },
    nome: { type: String, required: true, trim: true },
    bandeira: { type: String, required: true, trim: true },
    CVV: { type: String, required: true, trim: true },
});

var AlunoCursoSchema = mongo.Schema({
        codigoCurso: { type: String, required: true, trim: true },
        nomeCurso: { type: String, required: true, trim: true },
        deAcordo: { type: Boolean, required: false },
        pagamento: {
            taxaMatricula: { type: Number, required: true, default: 100 },
            parcelamento: { type: Number, required: true, default: 24 },
            parcela: { type: Number, required: true, default: 0 },
            melhorDia: { type: Number, required: true, default: 5 },
            cupom: AlunoCursoCupomSchema,
            formaPagamento: { type: String, required: true, trim: true },
            dadosCartao: DadosCartaoSchema
        }
    }, { versionKey: false, _id: false }) // _id=false impede criar objectid em memoria antes de salvar

var AlunosSchema = mongo.Schema({
    cpf: { type: String, index: true, unique: true, required: true, trim: true },
    email: { type: String, index: true, unique: true, required: true, trim: true },
    nome: { type: String, index: true, required: true, trim: true },
    whatsapp: { type: String, required: true, trim: true },
    celular: { type: String, required: true, trim: true },
    opcaoSMS: { type: Boolean, required: false },
    cep: { type: String, required: true, trim: true },
    endereco: { type: String, required: true, trim: true },
    numero: { type: String, required: true, trim: true },
    complemento: { type: String, trim: true },
    cep: { type: String, required: true, trim: true },
    bairro: { type: String, required: true, trim: true },
    cidade: { type: String, required: true, trim: true },
    uf: { type: String, required: true, trim: true },
    ufNaturalidade: { type: String, required: true, trim: true },
    cidadeNaturalidade: { type: String, required: true, trim: true },
    sexo: { type: String, required: true, trim: true },
    dataNascimento: { type: String, required: true, trim: true },
    estadoCivil: { type: String, required: true, trim: true },
    numeroIdentidade: { type: String, required: true, trim: true },
    orgaoExpedidor: { type: String, required: true, trim: true },
    nomeMae: { type: String, required: true, trim: true },
    nomePai: { type: String, trim: true },
    cursos: [AlunoCursoSchema],
    eAtivo: { type: Boolean, index: true, required: false },
}, { versionKey: false, _id: false }); // _id=false impede criar objectid em memoria antes de salvar

var model = mongo.model('alunos', AlunosSchema, 'alunos');

module.exports = model;


// var na = new model({
//     cpf: '039.100.557-02',
//     email: 'fran.fig@gmail.com',
//     nome: 'Francisco Lima Figueiredo',
//     whatsapp: '(61) 99313-3560',
//     celular: '(61) 99238-2835',
//     opcaoSMS: true,
//     cep: '72932-000',
//     endereco: 'Quadra 210, Lote 8, Bloco B Apto',
//     numero: '708B',
//     complemento: 'Praça Martins Pescador, Residencial Yes',
//     bairro: 'Sul (Águas Claras)',
//     cidade: 'Águas Claras',
//     uf: 'DF',
//     ufNaturalidade: 'RJ',
//     cidadeNaturalidade: 'Magé',
//     sexo: 'M',
//     dataNascimento: '08/12/1973',
//     estadoCivil: 'União Estável',
//     numeroIdentidade: '2763789',
//     orgaoExpedidor: 'SSP DF',
//     nomeMae: 'Jandira Lima Figueiredo',
//     nomePai: 'Antonio Rodrigues Figueiredo',
//     eAtivo: true,
//     cursos: [{
//         codigoCurso: 'metodologia-do-ensino-da-matematica-e-da-fisica-de-r400000-por-r160000',
//         nomeCurso: 'METODOLOGIA DO ENSINO DA MATEMÁTICA E DA FÍSICA / De R$4000,00 por R$1600,00',
//         deAcordo: true,
//         pagamento: {
//             taxaMatricula: 100,
//             parcelamento: 24,
//             parcela: 98.3,
//             melhorDia: 20,
//             cupom: {
//                 codigoCupom: 'SOIFODA1',
//                 origemCupom: 'Maluco Gustavo',
//                 tipoDesconto: 'percentual',
//                 valorDesconto: 0,
//                 percentualDesconto: .6,
//             },
//             formaPagamento: 'boleto',
//             dadosCartao: {
//                 numero: '4551 8410 3579 4397',
//                 nome: 'FRANCISCO FIGUEIRE',
//                 bandeira: 'Visa',
//                 CVV: '952',
//             }
//         }
//     }, {
//         codigoCurso: 'comunicacao-e-informacao-educacional-e-empresarial-de-r400000-por-r160000',
//         nomeCurso: 'COMUNICAÇÃO E INFORMAÇÃO EDUCACIONAL E EMPRESARIAL / De R$4000,00 por R$1600,00',
//         deAcordo: true,
//         pagamento: {
//             taxaMatricula: 100,
//             parcelamento: 24,
//             parcela: 95.3,
//             melhorDia: 20,
//             cupom: {
//                 codigoCupom: 'SOIFODA2',
//                 origemCupom: 'Maluco Gustavo',
//                 tipoDesconto: 'percentual',
//                 valorDesconto: 0,
//                 percentualDesconto: .6,
//             },
//             formaPagamento: 'boleto',
//             dadosCartao: {
//                 numero: '4551 8410 3579 4397',
//                 nome: 'FRANCISCO FIGUEIRE',
//                 bandeira: 'Visa',
//                 CVV: '952',
//             }
//         }
//     }, {
//         codigoCurso: 'curso-completo-preparatorio-para-o-enem-2017-partiuenem',
//         nomeCurso: 'CURSO COMPLETO PREPARATÓRIO PARA O ENEM 2017 #PARTIUENEM',
//         deAcordo: true,
//         pagamento: {
//             taxaMatricula: 100,
//             parcelamento: 24,
//             parcela: 105.3,
//             melhorDia: 20,
//             cupom: {
//                 codigoCupom: 'SOIFODA3',
//                 origemCupom: 'Maluco Gustavo',
//                 tipoDesconto: 'percentual',
//                 valorDesconto: 0,
//                 percentualDesconto: .6,
//             },
//             formaPagamento: 'boleto',
//             dadosCartao: {
//                 numero: '4551 8410 3579 4397',
//                 nome: 'FRANCISCO FIGUEIRE',
//                 bandeira: 'Visa',
//                 CVV: '952',
//             }
//         }
//     }]
// });

// model.findOneAndUpdate({ cpf: na.cpf }, // find a document with that filter
//     na, // document to insert when nothing was found
//     { upsert: true, new: false, runValidators: true }, // options
//     function(err, alunos) { // callback
//         if (err) {
//             console.log('fudeu ' + JSON.stringify(err));
//         }
//     });


// var na = new model({
//     cpf: '990.634.921-20',
//     email: 'daiane_pop2006@hotmail.com',
//     nome: 'Daiane Cristina Alves Rodrigues',
//     whatsapp: '(61) 99313-3560',
//     celular: '(61) 99238-2835',
//     opcaoSMS: true,
//     cep: '72932-000',
//     endereco: 'Quadra 210, Lote 8, Bloco B Apto',
//     numero: '708B',
//     complemento: 'Praça Martins Pescador, Residencial Yes',
//     bairro: 'Sul (Águas Claras)',
//     cidade: 'Águas Claras',
//     uf: 'DF',
//     ufNaturalidade: 'RJ',
//     cidadeNaturalidade: 'Magé',
//     sexo: 'M',
//     dataNascimento: '08/12/1973',
//     estadoCivil: 'União Estável',
//     numeroIdentidade: '2763789',
//     orgaoExpedidor: 'SSP DF',
//     nomeMae: 'Elizabeth Rodrigues',
//     nomePai: 'Ademhar de Barros',
//     eAtivo: true,
//     cursos: [{
//         codigoCurso: 'metodologia-do-ensino-da-matematica-e-da-fisica-de-r400000-por-r160000',
//         nomeCurso: 'METODOLOGIA DO ENSINO DA MATEMÁTICA E DA FÍSICA / De R$4000,00 por R$1600,00',
//         deAcordo: true,
//         pagamento: {
//             taxaMatricula: 100,
//             parcelamento: 24,
//             parcela: 98.3,
//             melhorDia: 20,
//             cupom: {
//                 codigoCupom: 'SOIFODA1',
//                 origemCupom: 'Maluco Gustavo',
//                 tipoDesconto: 'percentual',
//                 valorDesconto: 0,
//                 percentualDesconto: .6,
//             },
//             formaPagamento: 'boleto',
//             dadosCartao: {
//                 numero: '4551 8410 3579 4397',
//                 nome: 'FRANCISCO FIGUEIRE',
//                 bandeira: 'Visa',
//                 CVV: '952',
//             }
//         }
//     }, {
//         codigoCurso: 'comunicacao-e-informacao-educacional-e-empresarial-de-r400000-por-r160000',
//         nomeCurso: 'COMUNICAÇÃO E INFORMAÇÃO EDUCACIONAL E EMPRESARIAL / De R$4000,00 por R$1600,00',
//         deAcordo: true,
//         pagamento: {
//             taxaMatricula: 100,
//             parcelamento: 24,
//             parcela: 95.3,
//             melhorDia: 20,
//             cupom: {
//                 codigoCupom: 'SOIFODA2',
//                 origemCupom: 'Maluco Gustavo',
//                 tipoDesconto: 'percentual',
//                 valorDesconto: 0,
//                 percentualDesconto: .6,
//             },
//             formaPagamento: 'boleto',
//             dadosCartao: {
//                 numero: '4551 8410 3579 4397',
//                 nome: 'FRANCISCO FIGUEIRE',
//                 bandeira: 'Visa',
//                 CVV: '952',
//             }
//         }
//     }, {
//         codigoCurso: 'curso-completo-preparatorio-para-o-enem-2017-partiuenem',
//         nomeCurso: 'CURSO COMPLETO PREPARATÓRIO PARA O ENEM 2017 #PARTIUENEM',
//         deAcordo: true,
//         pagamento: {
//             taxaMatricula: 100,
//             parcelamento: 24,
//             parcela: 105.3,
//             melhorDia: 20,
//             cupom: {
//                 codigoCupom: 'SOIFODA3',
//                 origemCupom: 'Maluco Gustavo',
//                 tipoDesconto: 'percentual',
//                 valorDesconto: 0,
//                 percentualDesconto: .6,
//             },
//             formaPagamento: 'boleto',
//             dadosCartao: {
//                 numero: '4551 8410 3579 4397',
//                 nome: 'FRANCISCO FIGUEIRE',
//                 bandeira: 'Visa',
//                 CVV: '952',
//             }
//         }
//     }]
// });

// model.findOneAndUpdate({ cpf: na.cpf }, // find a document with that filter
//     na, // document to insert when nothing was found
//     { upsert: true, new: false, runValidators: true }, // options
//     function(err, alunos) { // callback
//         if (err) {
//             console.log('fudeu ' + JSON.stringify(err));
//         }
//     });

// model.findOne({ cpf: '039.100.557-02' }, function(err, alunos) {
//     console.log(alunos.cursos[0].pagamento.cupom.codigoCupom);
// });

// return;