const config = {
	personal: {
		name: 'Richard Carson',
		keywords: ['software developer', 'lavendeux'],
		description: 'A Carleton software engineering graduate and Algonquin alumni with over 10 years of industry experience, and a strong focus in IT security. Combines the leadership skills and proactive problem-solving of engineering with excellence in programming and software design. Proven reliability and enthusiasm towards the design, development, and deployment of software.'
	},

	social: {
		github: 'https://github.com/rscarson',
		linkedin: 'https://www.linkedin.com/in/richard-carson-6b765524/',
		resume: '/Richard%20Carson%20-%20Resume.pdf'
	},

	education: [
		{ name: 'Bachelor of Software Engineering', school: 'Carleton University', start: '2013', end: '2017' },
		{ name: 'Computer Science Engineering, Computing Science', school: 'Algonquin College', start: '2010', end: '2013' }
	],

	work: [
		{ position: 'IT Security Specialist / Software Developer', employer: 'Calian Ltd.', start: '2018', end: 'Present' },
		{ position: 'IT Security Specialist / Software Developer', employer: 'Secure Technologies International Inc.', start: '2017', end: '2018' },
		{ position: 'Software Developer', employer: 'Secure Technologies International Inc.', start: '2009', end: '2017' },
		{ position: 'Systems Administrator', employer: 'Secure Technologies International Inc.', start: '2008', end: '2009' }
	],

	projects: [
		{
			name: 'Lavendeux',
			description: ['Lavendeux inlines calculating, programming and testing utilities into your favourite text editor.'],
			code: 'https://github.com/rscarson/Lavendeux',
			website: 'http://rscarson.github.io/Lavendeux/'
		},
		{
			name: 'GBTIS',
			description: ['A gesture-controlled guestbook which leverages the Microsoft Kinect to capture and interpret a user\'s handwriting as they write in the air.', 'The captured text is then sent to a web application where they can be viewed and managed.'],
			code: 'https://github.com/adambatson/gbtis',
			website: 'https://github.com/adambatson/gbtisaas'
		},
		{
			name: 'BiasDetector',
			description: ['A neural network designed to detect political bias in news articles.', 'This project is a work in progress, originally built for Carleton\'s COMP 4106'],
			code: 'https://github.com/rscarson/BiasDetector',
			website: 'http://www3.carleton.ca/calendars/ugrad/0910/courses/COMP/4106.html'
		}
	],

	mail: {
		server: 'smtp.mailgun.org',
		username: 'postmaster@sandbox4a3c37a1b2884a9bbe909fe666a41add.mailgun.org',
		password: process.env.SMTP_PASSWORD,

		from: 'Portfolio Mailer <postmaster@sandbox4a3c37a1b2884a9bbe909fe666a41add.mailgun.org>',
		to: 'rscarson@richardcarson.ca',
		subject: 'New message from portfolio'
	}
}

module.exports = config;