const fetch = require('node-fetch');

exports.handler = async function() {

	const response = (await fetch('https://filenecclaim.com/api/'));
	const content = await response.json();

	return {
		statusCode: 200,
		body: JSON.stringify({
			content
		})
	}
}
