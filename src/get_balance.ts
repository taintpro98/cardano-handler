import { WalletServer } from 'cardano-wallet-js';
import { BRUNO, IRENE } from "./constants";

async function getBalance(walletId: string) {
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    let wallet = await walletServer.getShelleyWallet(walletId);
    let totalBalance = wallet.getTotalBalance();
    console.log(totalBalance);
}

(async () => {
    getBalance(BRUNO.walletId);
})();