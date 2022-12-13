const express = require ('express');
const app = express();
const path = require ('path');

//congiguracion express

app.set ('view engine', 'ejs');

//IMPORTANTE configurar
app.set('views', path.resolve (__dirname, 'views'));


//app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname,'../public')));

//routes
const home= require ('./routes/main.js');
const products= require ('./routes/products.js');

app.use (home)
app.use (products)
app.use ((req,res,next) =>{
    res.render('404-page');
})

//levantando el servidor
app.listen(3000, () => console.log('Servidor en el puerto 3000'));

//Eventos

