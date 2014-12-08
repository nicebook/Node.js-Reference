var winston = require('winston');

winston.remove(winston.transports.Console);
winston.add(winston.transports.File, { filename: 'winston-basic.log' });

winston.log('info', 'Hey!');
winston.info('Hello info!');
winston.warn('Hello warn!');
winston.error('Hello error!');

