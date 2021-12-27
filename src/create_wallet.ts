// import { Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
// import * as bip39 from "bip39";
// import * as crypto from "crypto";
// // import { connection } from "./constants";
// (async () => {
//     // create 12 word phrase
//     var randomBytes = crypto.randomBytes(16);

//     var mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'))
//     console.log("12 words: ", mnemonic);

//     const seed = await bip39.mnemonicToSeedSync(mnemonic, "password");
//     console.log(seed);
//     // const keypair = Keypair.fromSeed(seed.slice(0, 32));
//     // console.log("seed: ", seed);
//     // console.log(`publicKey ${keypair.publicKey.toBase58()}`)
//     // let airdropSignature = await connection.requestAirdrop(
//     //     keypair.publicKey,
//     //     LAMPORTS_PER_SOL * 0.1,
//     // );

//     // await connection.confirmTransaction(airdropSignature);
// })()

// const { Seed } = require('cardano-wallet-js');
    
// // generate a recovery phrase of 15 words (default)
// let recoveryPhrase = Seed.generateRecoveryPhrase();
// console.log(recoveryPhrase);

// let words = Seed.toMnemonicList(recoveryPhrase);
// console.log(words);

const { Seed, WalletServer } = require('cardano-wallet-js');
let walletServer = WalletServer.init('https://cardano-testnet.blockfrost.io/api/v0');

(async () => {
    // let walletServer = await WalletServer.init('http://you.server.com');
    let information = await walletServer.getNetworkInformation();
    console.log(information);
})()
    


// let recoveryPhrase = Seed.generateRecoveryPhrase();
// let mnemonic_sentence = Seed.toMnemonicList(recoveryPhrase);
// let passphrase = 'tangocrypto';
// let name = 'tangocrypto-wallet';
    
// let wallet = await walletServer.createOrRestoreShelleyWallet(name, mnemonic_sentence, passphrase);

