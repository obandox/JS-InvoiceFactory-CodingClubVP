var Customer = require('./models/Customer');
var Invoice  = require('./models/Invoice');
var Product  = require('./models/Product');


var customer = Customer.createFake();

var products_size = 5;
var products = [];

for (var i = products_size; i >= 0; i--) {
    products.push(Product.createFake());
};



console.log(products);