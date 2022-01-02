// Please add this dependency using npm install node-fetch and npm install @types/node-fetch
// import fetch, { Response } from 'node-fetch'; 
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
import axios from "axios";
const cmd: any = require('node-cmd');
import { Seed } from 'cardano-wallet-js';
import * as bip39 from "bip39";
import * as crypto from "crypto";

async function createSharedWallet() {
  var randomBytes = crypto.randomBytes(20);

  var recoveryPhrase = bip39.entropyToMnemonic(randomBytes.toString('hex'))
  console.log("15 words: ", recoveryPhrase);

  let mnemonic_sentence = Seed.toMnemonicList(recoveryPhrase);
  console.log('mnemonic_sentence', mnemonic_sentence);
  
  const resp = await axios.post(`http://localhost:8090/v2/shared-wallets`, {
    name: "Alan's Wallet",
    mnemonic_sentence: mnemonic_sentence,
    passphrase: 'Secure Passphrase'
  });
  console.log(resp.data);
}

async function getSequentialWalletById(walletId: string) {
  try {
    const resp = await axios.get(`http://localhost:8090/v2/wallets/${walletId}`);
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}

async function getAddresses(walletId: string) {
  try {
    const resp = await axios.get(`http://localhost:8090/v2/wallets/${walletId}/addresses`);
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}


(async () => {
  // createSharedWallet();
  const walletId: string = "72402ddccf35fb40d4383b39cbee8023909f4a51";

  createSharedWallet();
  // getSequentialWalletById(walletId);
})()


