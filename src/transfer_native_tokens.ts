import { Seed, WalletServer, AddressWallet, ShelleyWallet } from 'cardano-wallet-js';
import { BRUNO, IRENE } from "./constants";
import axios from "axios";

async function createTransaction(sender: any, receiver: any, amount: number){
    let walletServer = await WalletServer.init('http://localhost:8090/v2');
    let senderWallet = await walletServer.getShelleyWallet(sender.walletId);

    let receiverAddress = new AddressWallet(receiver.addressId);
    let estimatedFees = await senderWallet.estimateFee([receiverAddress], [amount]);
    console.log("estimatedFees", estimatedFees);

    let passphrase = 'tangocrypto';
    // let metadata: any = {0: 'hello', 1: Buffer.from('2512a00e9653fe49a44a5886202e24d77eeb998f', 'hex'), 4: [1, 2, {0: true}], 5: {'key': null, 'l': [3, true, {}]}, 6: undefined};

    let transaction = await senderWallet.sendPayment(passphrase, [receiverAddress], [amount]);
    console.log("transaction", transaction);
}

async function createApiTransaction(sender: any, receiver: any, amount: number){
    try{
        const resp = await axios.post(`http://localhost:8090/v2/wallets/${sender.walletId}/transactions`, {
            passphrase: sender.passphrase,
            payments: [
                {
                    address: receiver.addressId,
                    amount: {
                        quantity: amount,
                        unit: "lovelace"
                    } 
                }
            ]
        });
        console.log(resp.data);
    } catch (error){
        console.error(error);
    }
}

(async () => {
    let addresses: string[] = [BRUNO.addressId];

    createTransaction(BRUNO, IRENE, 1000000);
})()