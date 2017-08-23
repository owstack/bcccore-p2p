<img src="http://bcccore.io/css/images/bcccore-p2p.svg" alt="bcccore payment protocol" height="35" width="102">

Bcccore P2P
=======

[![NPM Package](https://img.shields.io/npm/v/bcccore-p2p.svg?style=flat-square)](https://www.npmjs.org/package/bcccore-p2p)
[![Build Status](https://img.shields.io/travis/owstack/bcccore-p2p.svg?branch=master&style=flat-square)](https://travis-ci.org/owstack/bcccore-p2p)
[![Coverage Status](https://img.shields.io/coveralls/owstack/bcccore-p2p.svg?style=flat-square)](https://coveralls.io/r/owstack/bcccore-p2p?branch=master)

`bcccore-p2p` adds [Bitcoin protocol](https://en.bitcoin.it/wiki/Protocol_documentation) support for Bcccore.

See [the main bcccore repo](https://github.com/owstack/bcccore) for more information.

## Attribution

This repository was created by copy forking [bitcore-p2p 59fbc03](https://github.com/bitpay/bitcore-p2p/commit/59fbc037153725a9007264e1d63edeec24d222cd).

## Getting Started

```sh
npm install bcccore-p2p
```
In order to connect to the Bitcoin network, you'll need to know the IP address of at least one node of the network, or use [Pool](/docs/pool.md) to discover peers using a DNS seed.

```javascript
var Peer = require('bcccore-p2p').Peer;

var peer = new Peer({host: '127.0.0.1'});

peer.on('ready', function() {
  // peer info
  console.log(peer.version, peer.subversion, peer.bestHeight);
});
peer.on('disconnect', function() {
  console.log('connection closed');
});
peer.connect();
```

Then, you can get information from other peers by using:

```javascript
// handle events
peer.on('inv', function(message) {
  // message.inventory[]
});
peer.on('tx', function(message) {
  // message.transaction
});
```

Take a look at the [bcccore guide](http://bcccore.io/guide/peer.html) on the usage of the `Peer` class.

## Contributing

See [CONTRIBUTING.md](https://github.com/owstack/bcccore/blob/master/CONTRIBUTING.md) on the main bcccore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/owstack/bcccore/blob/master/LICENSE).

Copyright 2017 Open Wallet Stack. Bcccore is a trademark maintained by Open Wallet Stack.
