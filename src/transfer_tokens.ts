import { BRUNO, IRENE } from "./constants";
import { Seed, WalletServer, AddressWallet, ShelleyWallet } from 'cardano-wallet-js';

(async () => {
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    let wallet = await walletServer.getShelleyWallet(BRUNO.walletId);

    let addresses = [(await wallet.getAddresses())[0]];
    console.log(addresses);
})()