// import { Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
import * as bip39 from "bip39";
import * as crypto from "crypto";
// import { connection } from "./constants";
(async () => {
    // create 12 word phrase
    var randomBytes = crypto.randomBytes(16);

    var mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'))
    console.log("12 words: ", mnemonic);

    const seed = await bip39.mnemonicToSeedSync(mnemonic, "password");
    console.log(seed);
    // const keypair = Keypair.fromSeed(seed.slice(0, 32));
    // console.log("seed: ", seed);
    // console.log(`publicKey ${keypair.publicKey.toBase58()}`)
    // let airdropSignature = await connection.requestAirdrop(
    //     keypair.publicKey,
    //     LAMPORTS_PER_SOL * 0.1,
    // );

    // await connection.confirmTransaction(airdropSignature);
})()