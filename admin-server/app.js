var express = require('express'),
    createError = require('http-errors'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    path = require('path'),
    logger = require('morgan'),
    sassMiddleware = require('node-sass-middleware'),
    expressSession = require('express-session'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    flash = require("connect-flash");

var indexRouter = require('./routes/index'),
    usersRouter = require('./routes/users'),
    User = require('./model/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    indentedSyntax: true, // true = .sass and false = .scss
    sourceMap: true
}));

passport.use(new LocalStrategy({ passReqToCallback: true },
    function(req, username, password, done) {
        console.log(username + '/' + JSON.stringify(password));
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            console.log(user.password);
            console.log('passou');
            if (user.password != password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log('passou');
            return done(null, user, { message: 'Correct password.' });
        });
    }
));

app.use(expressSession({
    secret: 'caralhim-de-asa-na-coxa-da-morena',
    resave: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


passport.serializeUser(function(user, done) {
    console.log("USER>" + JSON.stringify(user))
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findOne({ username: id }, function(err, user) {
        done(err, user);
    });
});

app.get('/login', function(req, res, next) {
    res.render('login', { title: 'CL Benefí­cios de ' + req.hostname });
});
app.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', failureFlash: true })
);

app.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
});

// Assim como qualquer middleware, é quintessencial chamarmos next()
// Se o usuário estiver autenticado
var isAuthenticated = function(req, res, next) {
    console.log(JSON.stringify(req.isAuthenticated()));
    if (req.isAuthenticated())
        return next();
    res.redirect('/caraaa');
}

app.get('/teste', isAuthenticated, function(req, res) {
    console.log(JSON.stringify(req.isAuthenticated()));
    if (req.isAuthenticated()) {
        res.write("Está!!!")
    } else {
        res.write("NÃO Está!!!")
    }
    res.end();
});



app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'spa')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;