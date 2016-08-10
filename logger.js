var log = function(req, res, next) {
	console.log("LOG");
	next();
}

module.exports = log;