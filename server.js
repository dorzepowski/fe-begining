let express = require("express");
const server = express();


server.use("", express.static("exercises"));
server.use("/api/customer",require("./customers.api"));


server.listen(8080, function () {
	console.log("Open browser at: ")
	console.log("http://localhost:8080/")
})
