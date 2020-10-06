module.exports = function ({ app, localStorage }) {
	app.post('/saveAnnotation', function (req, res) {
		try {
			localStorage.setItem('ANNOTATION', JSON.stringify(req.body));
			res.status(200).send("Data saved successfully");
		} catch (err) {
			res.status(500).send("There was a problem registering the user.");
		}
	});

	app.get('/getAnnotation', (req, res) => {
		let data = localStorage.getItem('ANNOTATION');
		if(data) {
			return res.status(200).send(JSON.parse(data));
		} else {
			res.status(500).send("No data saved");
		}
	});
}