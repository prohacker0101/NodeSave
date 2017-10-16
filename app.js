var express = require('express'),
    exphbs  = require('express3-handlebars'),

    app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('Index');
});

app.get('/', function (req, res) {
    res.render('Index');
});

app.get('/index', function (req, res) {
    res.render('Index');

app.get('/about', function (req, res) {
        res.render('About');
    });
    
    app.get('/MELOLAYUP', function (req, res) {
        res.render('MELOLAYUP');
    });

    app.get('/case', function (req, res) {
        res.render('case');
    });
});
app.listen(7000);
