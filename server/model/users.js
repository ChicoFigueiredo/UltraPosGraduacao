var mongo = {};
var model = {};
var UsersSchema = {};

module.exports = function(url = 'localhost', initialize = false) {
    //if (mongo[url]) { mongo[url] = null };
    mongo[url] = mongo[url] || require('./ultra-pos/_db')(url);
    let prefix = mongo[url].urlToTable(url);

    if (!UsersSchema[url]) {
        UsersSchema[url] = mongo[url].Schema({
            email: { type: String, unique: true, required: true, trim: true, index: true },
            username: { type: String, unique: true, required: true, trim: true, index: true },
            password: { type: String, required: true, },
            passwordConf: { type: String, required: true, },
            admin: { type: Boolean, default: false, required: true },
            sites: [{ type: String, trim: true }]
        }, { versionKey: false }); // _id=false impede criar objectid em memoria antes de salvar
    }

    model[url] = model[url] || mongo[url].model('users' + url, UsersSchema[url], prefix + 'users');

    if (initialize) initializeUsers(model[url])

    return model[url]
}



function initializeUsers(model) {
    var nc = {
        email: 'fran.fig@gmail.com',
        username: 'franfig',
        password: 'Ildp1973',
        passwordConf: 'Ildp1973',
    }

    model.findOneAndUpdate({ email: nc.email }, // find a document with that filter
        nc, // document to insert when nothing was found
        { upsert: true, new: false, runValidators: true }, // options
        function(err, alunos) { // callback
            if (err) {
                console.log('fudeu ' + JSON.stringify(err));
            }
        });
}