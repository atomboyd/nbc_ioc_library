const Ioc = require('./lib/ioc');

module.exports = function (config) {
	return {
		Ioc: Ioc(config),
	};
};
