var faker    = require('faker');
var UUID = require('uuid-js');

module.exports = (function(){
	'use strict';

	//createdAt, updatedAt, customerId, items[{product: Product, quantity: number}]
	var Invoice = function(data){
		var self = this;
		self.id = data.id || UUID.create(4).hex;
		self.createdAt = data.createdAt;
		self.updatedAt = data.updatedAt;
		self.customerId = data.customerId;
		self.items = data.items || [];
	};
	Invoice.prototype.add = function(product, quantity){
		var self = this;
		self.items.push({
			product: product,
			quantity: quantity
		});
	};
	
	Invoice.prototype.register = function(){

	};

	return Invoice;
})();