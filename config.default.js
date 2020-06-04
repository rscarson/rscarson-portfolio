const config = {
	personal: {
		name: '',
		keywords: [''],
		description: ''
	},

	social: {
		github: '',
		linkedin: '',
		resume: ''
	},

	education: [
		{ name: '', school: '', start: '', end: '' }
	],

	work: [
		{ position: '', employer: '', start: '', end: '' }
	],

	projects: [
		{
			name: '',
			description: [''],
			code: '',
			website: ''
		}
	],

	mail: {
		key: '', 
		domain: '',

		from: '',
		to: '',
		subject: 'New message from portfolio'
	}
}

module.exports = config;