import { BRUNO, IRENE } from "./constants";
import { Seed, WalletServer, AddressWallet, ShelleyWallet } from 'cardano-wallet-js';

(async () => {
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    let wallet = await walletServer.getShelleyWallet(BRUNO.walletId);

    const poolId: string = "a9ec394d519fdc192707868c28f8285af37fe83c0c9ad4541ac9820f";
    const policyId: string = "2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664";
    const assetName: string = "50494759546f6b656e"; // PIGYToken

    let addresses = [(await wallet.getAddresses())[0]];
    console.log(addresses);
    // fetchAsset(walletId, policyId, assetName);
    // getSequentialWalletById(walletId);
})()