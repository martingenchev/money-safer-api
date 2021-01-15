/**
 * Configurations of logger.
 */
const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');


const logger =  winston.createLogger({
    transports:  [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

const successLogger = logger;
successLogger.log( {
    'name': 'access-file',
    'level': 'info',
    filename: 'access.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
});

const errorLogger = logger;
errorLogger.log( {
    'name': 'error-file',
    'level': 'error',
    filename: 'error.log',
    'json': false,
    'datePattern': 'yyyy-MM-dd-',
    'prepend': true
});

module.exports = {
    'successlog': successLogger,
    'errorlog': errorLogger
};