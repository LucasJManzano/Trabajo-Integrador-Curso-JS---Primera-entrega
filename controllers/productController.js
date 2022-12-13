const path = require ('path');
const fs = require ('fs');

//Uniendo app.js con el JSON
const rutaJson = path.resolve(__dirname, '../data/products.json');
let productsJson = fs.readFileSync(rutaJson, { encoding: 'UTF-8' });
let products = JSON.parse(productsJson);
    

//----------------------------------------------------------------------------------------

let controller = {
    products: (req, res) => {
        res.render ('product', {productos:products})
    },

    detail: (req,res) =>{
        let product = products.find(products => {
            return products.id == req.params.id});
        res.render ('detail', {productos: product})
    },

    create: (req,res) =>{
        res.render ('create')
    },

    edit: (req,res) =>{
        res.render ('edit')
    }
}


module.exports = controller;