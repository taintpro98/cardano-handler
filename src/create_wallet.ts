import { Seed, WalletServer, AddressWallet, ShelleyWallet } from 'cardano-wallet-js';
import * as bip39 from "bip39";
import * as crypto from "crypto";

let walletServer: any;

async function createSequentialWallet(){
    var randomBytes = crypto.randomBytes(20);

    var recoveryPhrase = bip39.entropyToMnemonic(randomBytes.toString('hex'))
    console.log("15 words: ", recoveryPhrase);

    let mnemonic_sentence = Seed.toMnemonicList(recoveryPhrase);
    console.log(mnemonic_sentence);

    let passphrase = 'tangocrypto';
    let name = 'tangocrypto-wallet';

    let wallet = await walletServer.createOrRestoreShelleyWallet(name, mnemonic_sentence, passphrase);
    console.log('success');
}

async function getAllSequentialWallets(){
    let wallets = await walletServer.wallets();
    console.log(wallets);
}

(async () => {
    walletServer = await WalletServer.init('http://localhost:8090/v2');

    // createSequentialWallet();
    getAllSequentialWallets();

    // const rootKey = Seed.deriveRootKey(mnemonic_sentence);
    // const accountKey = Seed.deriveAccountKey(rootKey);

    // const stakePrvKey = accountKey
    // // .derive(CARDANO_CHIMERIC) // chimeric
    // .derive(0);

    // const privateKey = stakePrvKey.to_raw_key();
    // const publicKey = privateKey.to_public();

    // console.log(privateKey);

    // let keyPair= Seed.generateKeyPair();
    // let policyVKey = keyPair.publicKey.to_bech32();
    // let policySKey = keyPair.privateKey.to_bech32();
    // console.log(policySKey);
})()