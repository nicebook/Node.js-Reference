var bunyan = require('bunyan');

var log = bunyan.createLogger({
	name: 'bunyan-example',
	streams: [{
		path: './bunyan-file.log'
	}]
});

log.info('Hello info');
log.warn('Hello warn');
log.debug('Hello debug');
log.error('Hello error');
log.fatal('Hello fatal');
