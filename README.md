# Notes
https://getfirebug.com/wiki/index.php/Console_API#console.table.28data.5B.2C_columns.5D.29

https://developer.chrome.com/devtools/docs/commandline-api

# JS-InvoiceFactory-CodingClubVP

https://edu-vp.slack.com/files/daniel/F0DRJE80M/Invoice_Factory

# Let´s take in consideration the next list:
Customers ( email, name, phone, address )
Products ( sku, name, stock,  price, discount, start, until )
Invoice( createdAt, updatedAt, customerId, items[{product: Product, quantity: number}] )

# glossary
stock: manage the quantity of items

# questions
How to handle taxes, discounts and stock?

# scope
Create the abstraction structure using:
Closure 
JSON

# test
Create a customer
Add 5 products
Update the stock
Calculate: Taxes, Total, Discount
Serialize to JSON the final invoice
