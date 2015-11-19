var Customer = require('./models/Customer');
var Invoice  = require('./models/Invoice');
var Product  = require('./models/Product');
var _        = require('lodash');


var customer = Customer.createFake();

var products_size = 5;
var products = [];

for (var i = products_size; i >= 0; i--) {
    products.push(Product.createFake());
};


var invoice = new Invoice({customerId: customer.id});

invoice.add(_.sample(products), 1);
invoice.add(_.sample(products), 2);


invoice.register();

console.log(JSON.stringify(invoice, false, 2));