var faker    = require('faker');
var UUID     = require('uuid-js');
var shortid  = require('shortid');

module.exports = (function(){
	'use strict';

	// Products ( sku, name, stock,  price, discount, start, until )
	var Product = function(data){
		this.id = data.id || UUID.create(4).hex;
		this.sku = data.sku;
		this.name = data.name;
		this.stock = data.stock;
		this.price = data.price;
		this.discount = data.discount;
		this.start = data.start;
		this.until = data.until;
	};

	Product.createFake = function(){
		return new Product({
            sku : shortid.generate(),
            name : faker.commerce.productName(),
            price : faker.commerce.price(),
            discount : faker.random.number({min:1, max:99}),
            start : faker.date.past(),
            until : faker.date.future()
		});
	};

	return Product;
})();