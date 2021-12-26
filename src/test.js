var bip39 = require('bip39');
var cryptoo = require('crypto');
var randomBytes = cryptoo.randomBytes(16);
var mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'));
var seed = bip39.mnemonicToSeed(mnemonic);
console.log(mnemonic);
var bitcoin = require('bitcoinjs-lib'); // npm i -S bitcoinjs-lib
var bitcoinNetwork = bitcoin.networks.bitcoin;
var hdMaster = bitcoin.HDNodeFromSeedBuffer(seed, bitcoinNetwork); // seed from above
var key1 = hdMaster.derivePath('m/0');
var key2 = hdMaster.derivePath('m/1');
console.log(key1.keyPair.toWIF());
console.log(key2.keyPair.toWIF());
