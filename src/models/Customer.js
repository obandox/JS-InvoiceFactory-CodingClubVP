var faker  = require('faker');
var UUID   = require('uuid-js');

module.exports = (function(){
	'use strict';

	//Customers ( email, name, phone, address )
	var Customer = function(data){
		this.id = data.id || UUID.create(4).hex;
		this.email = data.email;
		this.name = data.name;
		this.phone = data.phone;
		this.address = data.address;
	};

	Customer.createFake = function(){
		return new Customer({
			name: faker.name.findName(),
			phone: faker.phone.phoneNumber(),
			email: faker.internet.email(),
			address: faker.address.streetAddress()+" "+faker.address.secondaryAddress()
		});
	};

	return Customer;
})();