const config = require('../config');

var express = require('express');
var router = express.Router();
var mailgun = require('mailgun-js');

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
		mail: { key, domain, from, to, subject }
	} = config;

	mailgun({key, domain});
	var data = {
		from: from,
		to: to,
		subject: subject,
		text: `{$req.body.name} <{$req.body.email}>:\n{$req.body.body}`
	};

	mailgun.messages().send(data, function (error, body) {
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
