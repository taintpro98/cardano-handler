var bip39 = require('bip39') // npm i -S bip39
var crypto = require('crypto')

// what you describe as 'seed'
var  randomBytes = crypto.randomBytes(16) // 128 bits is enough

// your 12 word phrase
var mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex')) 
console.log(mnemonic);
// what is accurately described as the wallet seed
var seed = bip39.mnemonicToSeed(mnemonic) // you'll use this in #3 below