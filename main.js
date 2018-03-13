
const request = require('request');
const {SHA256} = require('crypto-js');
const {argv} = require('yargs');

const email = "shubgupta@cs.stonybrook.edu";

request('https://truveris.github.io/jobs/',(error,response,body) => {
	if(!error && response.statusCode == 200)
	{
		console.log(body+email);
		console.log(SHA256(body+email).toString());
	}
});