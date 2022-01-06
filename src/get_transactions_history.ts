import { Seed, WalletServer, AddressWallet, ShelleyWallet } from 'cardano-wallet-js';
import { BRUNO, IRENE } from "./constants";
import axios from "axios";

async function getTransactions(sender: any) {
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    let wallet = await walletServer.getShelleyWallet(sender.walletId);
    let transactions = await wallet.getTransactions();
    console.log(transactions);
}

(async () =>{
    getTransactions(BRUNO);
})()