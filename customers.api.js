let express = require("express");
const api = express();
module.exports = api;

api.get("/", function (req, res) {
	res.json([
		{
			name: "Adam",
			lastname: "Adamski"
		},
		{
			name: "Beata",
			lastname: "Beatowska"
		},
		{
			name: "Cezary",
			lastname: "Cezarowicz"
		}
	])
});

