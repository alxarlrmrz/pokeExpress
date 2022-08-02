const express = require('express');
const pokemon = require('./models/pokemon');
const app = express();
const port = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.listen(3000, () => {
    console.log('listening');
});

app.get('/', function (req,res) {
    res.send('Welcome to the Pokemon App!');
    });

// app.get('/pokemon', function (req,res) {
//     res.render(pokemon);
//     });
// app.get('/pokemon', function(req, res){
//     res.render('Index');
// });      

app.get('/pokemon', (req, res) => {
    pokemon.forEach(function (pokemon) {
        return pokemon.toLocaleUpperCase[0]
    })
    res.render('Index', {pokemon: pokemon});
});