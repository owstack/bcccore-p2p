'use strict';

var Message = require('../message');
var inherits = require('util').inherits;
var bcccore = require('bcccore-lib');
var BufferUtil = bcccore.util.buffer;

/**
 * Request peer to clear data for a bloom filter
 * @extends Message
 * @constructor
 */
function FilterclearMessage(arg, options) {
  Message.call(this, options);
  this.command = 'filterclear';
}
inherits(FilterclearMessage, Message);

FilterclearMessage.prototype.setPayload = function() {};

FilterclearMessage.prototype.getPayload = function() {
  return BufferUtil.EMPTY_BUFFER;
};

module.exports = FilterclearMessage;