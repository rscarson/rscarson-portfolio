const config = require('../config');

var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var util = require('util');

/* GET home page. */
router.get('/:condition?', function(req, res, next) {
	var flags = {
		error: false,
		sent: false
	};
	if (req.params.condition == 'error') flags.error = true;
	else if (req.params.condition == 'sent') flags.sent = true;

	const { 
		personal, social, education, work, projects
	} = config;

	res.render('index', {
		flags,
		personal,
		social,
		education,
		work,
		projects
	});
});

router.post('/contact', function(req, res, next) {
	const { 
		mail: { server, username, password, from, to, subject }
	} = config;

	let transporter = nodemailer.createTransport({
		host: server,
		port: 587,
		secure: false,
		auth: {
			user: username,
			pass: password
		},
	});

	transporter.sendMail({
		from: from,
		to: to,
		subject: subject,
		text: util.format('%s <%s>:\n%s', req.body.name, req.body.email, req.body.body),
		html: util.format('<strong>%s (%s)</strong>:<br/><hr/>%s', req.body.name, req.body.email, req.body.body),
	}, function (error, info) {
		if (error) {
			console.log('Sending contact email... ' + error);
			res.redirect('/error');
		} else {
			console.log('Sending contact email... Success!');
			res.redirect('/sent')
		}
	});
});

module.exports = router;
