import { WalletServer } from 'cardano-wallet-js';

(async () => {
    let walletServer = await WalletServer.init('http://localhost:8090/v2');

    let information = await walletServer.getNetworkInformation();
    console.log("information", information);

    let parameters = await walletServer.getNetworkParameters();
    console.log("parameters", parameters);

    let clock = await walletServer.getNetworkClock();
    console.log("clock", clock);
})()