// import { Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js"
// import * as bip39 from "bip39";
// import * as crypto from "crypto";
// // import { connection } from "./constants";
// (async () => {
//     // create 12 word phrase
//     var randomBytes = crypto.randomBytes(16);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
//     var mnemonic = bip39.entropyToMnemonic(randomBytes.toString('hex'))
//     console.log("12 words: ", mnemonic);
//     const seed = await bip39.mnemonicToSeedSync(mnemonic, "password");
//     console.log(seed);
//     // const keypair = Keypair.fromSeed(seed.slice(0, 32));
//     // console.log("seed: ", seed);
//     // console.log(`publicKey ${keypair.publicKey.toBase58()}`)
//     // let airdropSignature = await connection.requestAirdrop(
//     //     keypair.publicKey,
//     //     LAMPORTS_PER_SOL * 0.1,
//     // );
//     // await connection.confirmTransaction(airdropSignature);
// })()
// const { Seed } = require('cardano-wallet-js');
// // generate a recovery phrase of 15 words (default)
// let recoveryPhrase = Seed.generateRecoveryPhrase();
// console.log(recoveryPhrase);
// let words = Seed.toMnemonicList(recoveryPhrase);
// console.log(words);
var _a = require('cardano-wallet-js'), Seed = _a.Seed, WalletServer = _a.WalletServer;
var walletServer = WalletServer.init('https://cardano-testnet.blockfrost.io/api/v0');
(function () { return __awaiter(_this, void 0, void 0, function () {
    var information;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, walletServer.getNetworkInformation()];
            case 1:
                information = _a.sent();
                console.log(information);
                return [2 /*return*/];
        }
    });
}); })();
// let recoveryPhrase = Seed.generateRecoveryPhrase();
// let mnemonic_sentence = Seed.toMnemonicList(recoveryPhrase);
// let passphrase = 'tangocrypto';
// let name = 'tangocrypto-wallet';
// let wallet = await walletServer.createOrRestoreShelleyWallet(name, mnemonic_sentence, passphrase);
