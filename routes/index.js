var express = require('express');
var router = express.Router();

// Importing FS and Path Module
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function (req, res) {
	res.render('index', { title: '2nd Node Hands-on Using express-generator' });
	res.end();
});

// GET Method for /page-1
router.get('/page-1', (request, response) => {
	response.render('page-1', { titleOfPage1: '2nd page' });
	// response.send('<h1>msg sent from index.js</h1>');
	response.end();
});

// GET for form page
router.get('/form', (req, res) => {
	res.render('form', { formTitle: 'Form Page' });
});

// POST for submitting form data
router.post('/formSubmit', (req, res) => {
	let formName = req.body.userName;
	let formEmail = req.body.userEmail;
	fs.appendFile('formData.txt', `{"Name": "${formName}", "Email": "${formEmail}"},\n`, (e) => {
		if (e) {
			console.log(e);
		}
	});
});

// GET request after successful submission of form data
router.get('/formSubmit', (req, res) => {
	res.render('success');
});

module.exports = router;
