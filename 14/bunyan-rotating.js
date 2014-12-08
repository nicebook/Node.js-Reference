var bunyan = require('bunyan');

var log = bunyan.createLogger({
	name: 'bunyan-example',
	streams: [{
		type: 'rotating-file',
		path: './bunyan-rotating.log',
		period: '1d',
		count: 7
	}]
});

log.info('Hello info');
log.warn('Hello warn');
log.debug('Hello debug');
log.error('Hello error');
log.fatal('Hello fatal');
