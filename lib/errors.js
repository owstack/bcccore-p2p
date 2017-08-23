'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on bcccore-p2p Module {0}'
};

module.exports = require('bcccore-lib').errors.extend(spec);
