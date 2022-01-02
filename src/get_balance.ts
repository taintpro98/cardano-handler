import { WalletServer } from 'cardano-wallet-js';

let walletServer: any;
async function getBalance(walletId: string) {
    let wallet = await walletServer.getShelleyWallet(walletId);
    let addresses = await wallet.getAddresses();
    console.log(addresses);

    let transactions = await wallet.getTransactions();
    console.log(transactions)

    let totalBalance = wallet.getTotalBalance();
    console.log(totalBalance);
}

(async () => {
    walletServer = await WalletServer.init('http://localhost:8090/v2');

    let walletId = '72402ddccf35fb40d4383b39cbee8023909f4a51';
    getBalance(walletId);

})();