const express = require('express')
var hbs = require('hbs');
require('dotenv').config();
const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');



//Servir contenido estatico
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Alejandro Carvajal',
        titulo: 'Curso NodeJS'
    });
})

app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Alejandro Carvajal',
        titulo: 'Curso NodeJS'
    });
})

app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Alejandro Carvajal',
        titulo: 'Curso NodeJS'
    });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})