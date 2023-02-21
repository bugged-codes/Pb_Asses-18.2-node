var express = require('express');
var router = express.Router();

// Importing FS and Path Module
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: '2nd Node Hands-on Using express-generator' });
	res.end();
});

// GET Method for /page-1
router.get('/page-1', (request, response, next) => {
	response.render('page-1', { titleOfPage1: '2nd page' });
	// response.send('<h1>msg sent from index.js</h1>');
	response.end();
});

// GET for /api

module.exports = router;
