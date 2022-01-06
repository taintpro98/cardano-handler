import { BRUNO, IRENE } from "./constants";
import axios from "axios";

async function getAssets(walletId: string) {
    try {
        const resp = await axios.get(`http://localhost:8090/v2/wallets/${walletId}/assets`);
        console.log(resp.data);
    } catch (error) {
        console.error(error);
    }
}

(async () => {
    const poolId: string = "a9ec394d519fdc192707868c28f8285af37fe83c0c9ad4541ac9820f";
    const policyId: string = "2aa9c1557fcf8e7caa049fa0911a8724a1cdaf8037fe0b431c6ac664";
    const assetName: string = "50494759546f6b656e"; // PIGYToken
    let addresses: string[] = [BRUNO.addressId];

    getAssets(BRUNO.walletId);
})()