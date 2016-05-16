	## Synopsis

	This is a wrapper around the request module that simplifies the interaction with Cleversafe instances. It makes it easier to set up
	a proxy in case your cleversafe instance is behind a firewall.

	## Code Example

	~~~ js
	var cleversafe = require('npm-cleversafe')


	//Create cleversafe instance
	var conn = new cleversafe(USERNAME,PASSWORD,CLEVERSAFE_HOST,PROXY URL)

	//Get the vault list in JSON form
	conn.vaultList(function(list){

	console.log(list);

	});

	//Set the vault we will be working with
	conn.setVault(VAULT_NAME)


	//List objects in the specified vault in JSON form
	conn.objectList(function(list){

	console.log(list);

	});


	//Deposit file in the vault
	conn.deposit("image.jpg")

	//Get file from cleversafe. The file will be stored in the local directory
	conn.retrieve("image.jpg")

	//Delete file on cleversafe
	conn.delete("image.jpg")

	~~~

	## Motivation

	I decided to create this wrapper since I couldn't find any npm packages that simplified the interactions with cleversafe

	## Installation

		$ npm install --save npm-cleversafe


	## Contributors

	Robert@Bluechasm.com

	Feel free to contact me for suggestions or questions about this package