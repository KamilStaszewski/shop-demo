const express = require('express');
const path = require('path');
const data = require('./apiData');
const staticClass = require('./Data')

const staticData = new staticClass;
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join('client/build')));
app.disable('etag');


app.get('/api/category/:category', function (req, res) {
	let find = data.filter((el => {
		return el.product.category == req.params.category
	}));
	res.json(find);
	console.log('found category');
});

app.get('/api/item/:id', function (req, res) {
	let find = data.filter((el => {
		return el.product.id == req.params.id
	}))
	res.json(find);
	console.log('found item')
})

app.get('/api/itemsearch/:search', function (req, res) {
	let find = data.filter((el => {
		return el.product.name.toLowerCase().includes(req.params.search.toLowerCase());
	}))
	res.json(find);
	console.log('searching for item item')
})

// app.get()

// An api endpoint that returns a short list of items
app.get('/api/data', (req, res) => {
	res.json(data);
	console.log('Sent list of items');
});




// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(staticData.generateData())

console.log('App is listening on port ' + port);