"use strict"; /* eslint-env node */ /* global */ /* eslint no-warning-comments: [1, { "terms": ["todo", "fix", "help"], "location": "anywhere" }] */
var debug = false;

// Load Node Modules & Custom Modules
var express = require("express"),
	app = express(),
	server = app.listen(process.env.PORT || (process.argv[2] || 8000), function expressServerListening () {
		console.log(server.address());
	}),
	io = require("socket.io"),
	listener = io.listen(server),
	jsonfile = require("jsonfile"),
	CronJob = require("cron").CronJob,
	pugStatic = require("pug-static"),
	utils = require("./utils.js"),
	postFunctions = require("./customModules.js");

// Static Express Middleware
app.use(express.static("public"));
app.use(pugStatic("public/"));

// Socket.io Control
listener.sockets.on("connection", function connectionDetected (socket) {
	socket.on("refreshRequest", function processRefreshRequest (options) {
		socket.emit("refreshResponse", {});
	});
});