module.exports = Cleversafe;

var request = require('request');
var parseString = require('xml2js').parseString;
var fs = require("fs");

function Cleversafe (usr,pswd,host,p){


	this.auth = 'Basic ' + new Buffer(usr + ':' + pswd).toString('base64');
	this.cHost = host;
	if (p){
	this.proxy = p
	}

}

Cleversafe.prototype.setVault = function(vaultName){

	this.vault = vaultName;

}

Cleversafe.prototype.deposit = function(file){


	var options = {
			url: this.cHost+'/'+this.vault+'/'+file.path,
			proxy:this.proxy,
			port: 80,
			method: 'PUT',
			headers: {
			'Authorization':this.auth,
			'User-Agent': 'npm-Cleversafe'
			}
			};

			function callback(error, response, body) {
			if (error) {
			console.log(body);
				}
			}

			//deposit on cleversafe
			fs.createReadStream(file.path).pipe(request(options, callback));

}

Cleversafe.prototype.retrieve = function(filename){


	var options = {
	url: this.cHost+'/'+this.vault+'/'+filename,
	proxy:this.proxy,
	port: 80,
	method: 'GET',
	headers: {
	'Authorization':this.auth,
	'User-Agent': 'npm-Cleversafe'
	}
	};


	function callback(error, response, body) {
	if (error) {
		console.log(error)
	}

	}

	request(options, callback).pipe(fs.createWriteStream(filename))
}


Cleversafe.prototype.vaultList = function(cb){


	var options = {
	url: this.cHost,
	proxy:this.proxy,
	port: 80,
	method: 'GET',

	headers: {
	'Authorization':this.auth,
	'User-Agent': 'npm-Cleversafe'
	}
	};


	function callback(error, response, body) {
	if (error) {
		console.log(error)
	}

	
	
	parseString(body, function (err, result) {
	    cb(result);
	});
		

	}

	request(options, callback)
}


Cleversafe.prototype.objectList = function(cb){


	var options = {
	url: this.cHost+'/'+this.vault,
	proxy:this.proxy,
	port: 80,
	method: 'GET',

	headers: {
	'Authorization':this.auth,
	'User-Agent': 'npm-Cleversafe'
	}
	};


	function callback(error, response, body) {
	if (error) {
		console.log(error)
	}

	
	
	parseString(body, function (err, result) {
	    cb(result);
	});
		

	}

	request(options, callback)
}

Cleversafe.prototype.delete = function(filename){


	var options = {
	url: this.cHost+'/'+this.vault+'/'+filename,
	proxy:this.proxy,
	port: 80,
	method: 'DELETE',
	headers: {
	'Authorization':this.auth,
	'User-Agent': 'npm-Cleversafe'
	}
	};


	function callback(error, response, body) {
	if (error) {
		console.log(error)
	}

	}

	request(options, callback)
}
