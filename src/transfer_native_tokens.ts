import { Seed, WalletServer, AddressWallet, ShelleyWallet } from 'cardano-wallet-js';
import { BRUNO, IRENE } from "./constants";

async function createTransaction(sender: any, receiver: any) {
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    let wallet = await walletServer.getShelleyWallet(sender.walletId);
    let transactions = await wallet.getTransactions();
    console.log(transactions);
}

(async () => {
    const poolId: string = "a9ec394d519fdc192707868c28f8285af37fe83c0c9ad4541ac9820f";
    const policyId: string = "2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664";
    const assetName: string = "50494759546f6b656e"; // PIGYToken
    let addresses: string[] = [BRUNO.addressId];

    createTransaction(BRUNO, IRENE);
    // fetchAsset(walletId, policyId, assetName);
    // getSequentialWalletById(walletId);
})()