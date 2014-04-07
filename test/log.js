var winston = require('winston');
var logger = new (winston.Logger) ({
	transports: [
		new winston.transports.File({filename: 'stats.log', level: 'info'})
	]
});
module.exports = logger;
