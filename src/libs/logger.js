'use strict';

const bunyan = require('bunyan');
const bformat = require('bunyan-format');
const formatOut = bformat({
  color: true,
  levelInString: true,
  outputMode: 'long'
});

const streams = [{level: process.env.LOGS_LEVEL, stream: formatOut}];

const logger = bunyan.createLogger({
  name: process.env.LOGS_NAME || 'search',
  serializers: {
    err: bunyan.stdSerializers.err,
    req: bunyan.stdSerializers.req
  },
  src: true,
  streams: streams
});

module.exports = logger;
