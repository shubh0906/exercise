
const request = require('request');

const email = "shubgupta@cs.stonybrook.edu";

request('https://truveris.github.io/jobs/',(error,response,body) => {
	if(!error && response.statusCode == 200)
		console.log(body+email);
});