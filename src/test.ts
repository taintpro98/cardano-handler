// Please add this dependency using npm install node-fetch and npm install @types/node-fetch
// import fetch, { Response } from 'node-fetch'; 
// const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
import axios from "axios";
const cmd: any = require('node-cmd');
import { Seed, WalletServer } from 'cardano-wallet-js';
import * as bip39 from "bip39";
import * as crypto from "crypto";
import { BRUNO, IRENE } from "./constants";

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

async function inspectAddress(addressId: string) {
  try {
    const resp = await axios.get(`http://localhost:8090/v2/addresses/${addressId}`);
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}

async function getAssets(walletId: string) {
  try {
    const resp = await axios.get(`http://localhost:8090/v2/wallets/${walletId}/assets`);
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}

async function migrate(walletId: string, addresses: string[]) {
  try {
    const resp = await axios.post(`http://localhost:8090/v2/wallets/${walletId}/migrations`, {
      passphrase: 'tangocrypto',
      addresses: addresses
    });
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}

async function deleteSequentialWallet(walletId: string) {
  try {
    const resp = await axios.delete(`http://localhost:8090/v2/wallets/${walletId}`);
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}

async function getStakeKeysById(walletId: string) {
  try {
    const resp = await axios.get(`http://localhost:8090/v2/wallets/${walletId}/stake-keys`);
    console.log(resp.data.ours.stake);
  } catch (error) {
    console.error(error);
  }
}

async function testStake(walletId: string) {
  let walletServer = await WalletServer.init('http://localhost:8090/v2');

  // let wallet = await walletServer.getShelleyWallet(walletId);

  // let fee = await wallet.estimateDelegationFee();
  // console.log(fee);
  let stake = 1000000000;
  let pools = await walletServer.getStakePools(stake);
  console.log(pools);
}

async function getStakePools() {
  try {
    const resp = await axios.get(`http://localhost:8090/v2/stake-pools`, {
      params: {
        stake: 1000000000
      }
    });
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}

async function fetchAsset(walletId: string, policyId: string, assetName: string) {
  try {
    const resp = await axios.get(`http://localhost:8090/v2/wallets/${walletId}/assets/${policyId}/${assetName}`);
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}

async function getWalletById(walletId: string) {
  try {
    const resp = await axios.get(`http://localhost:8090/v2/wallets/${walletId}`);
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}

async function testAddress(walletId: string) {
  let walletServer = await WalletServer.init('http://localhost:8090/v2');

  // const totalExpectedLovelace = 1000000;
  // const resp = await axios.get(`http://localhost:8090/v2/wallets/${walletId}`);
  // // const wallet: any = await resp.json();
  // const wallet: any = resp.data;
  // const balance: number = wallet.balance.total.quantity;
  // console.log(balance);
  let wallet = await walletServer.getShelleyWallet(walletId);
  let address = (await wallet.getAddresses())[0];
  console.log(address);
}

async function UTxOStatistics(walletId: string) {
  try {
    const resp = await axios.get(`http://localhost:8090/v2/wallets/${walletId}/statistics/utxos`);
    console.log(resp.data);
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  let addresses: string[] = [BRUNO.addressId];

  testAddress(BRUNO.walletId);
  // fetchAsset(walletId, policyId, assetName);
  // getSequentialWalletById(walletId);
})()