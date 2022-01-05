import { Seed, WalletServer, AddressWallet, ShelleyWallet } from 'cardano-wallet-js';
import * as bip39 from "bip39";
import * as crypto from "crypto";
import { BRUNO, IRENE } from "./constants";

async function createSequentialWallet(passphrase: string, name: string) {
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    var randomBytes = crypto.randomBytes(20);

    var recoveryPhrase = bip39.entropyToMnemonic(randomBytes.toString('hex'))
    console.log("15 words: ", recoveryPhrase);

    let mnemonic_sentence = Seed.toMnemonicList(recoveryPhrase);
    console.log(mnemonic_sentence);

    // let passphrase = 'tangocrypto';
    // let name = 'tangocrypto-wallet';

    let wallet = await walletServer.createOrRestoreShelleyWallet(name, mnemonic_sentence, passphrase);
    console.log('success');
}

async function getAllSequentialWallets() {
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    console.log('Start getAllSequentialWallets ... ');
    let wallets = await walletServer.wallets();
    console.log(wallets);
    console.log(wallets.length);
    // return await wallets;
}

async function getWalletInfo(walletId: string){
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    let wallet = await walletServer.getShelleyWallet(walletId);
    console.log(wallet);
}

async function removeWalletById(walletId: string){
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    let wallet = await walletServer.getShelleyWallet(walletId);
    await wallet.delete();
}

async function removeWalletByIndex(index: number) {
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    let wallet = (await walletServer.wallets())[index];
    await wallet.delete();
}

// async function updatePassPhrase(){
//     wallet = await wallet.updatePassphrase(oldPassphrase, newPassphrase);

// }

(async () => {
    getWalletInfo(IRENE.walletId);
    // getAllSequentialWallets();
    // removeWalletByIndex(3);
})()