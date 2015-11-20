var faker = require('faker');
var UUID  = require('uuid-js');
var Promise = require('bluebird');

'use strict';

//createdAt, updatedAt, customerId, items[{product: Product, quantity: number}]
var Invoice = function(data){
	var self = this;
	self.customerId = data.customerId;

	self.id = data.id || UUID.create(4).hex;
	self.createdAt = data.createdAt || new Date();
	self.updatedAt = data.updatedAt || new Date();
	self.items = data.items || [];
};

Invoice.prototype._beforeUpdate = function(){
	var self = this;
	self.updatedAt = new Date();
};

Invoice.prototype.add = function(product, quantity){
	var self = this;
	self.items.push({
		product: product,
		quantity: quantity
	});
};

Invoice.prototype.register = function(){
	this._beforeUpdate();

};


module.exports = Invoice