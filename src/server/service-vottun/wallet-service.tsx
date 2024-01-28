import { Convert, CreateWalletModel } from "../models/create-wallet-model";
import { GetNewHashConvert } from "../models/get-new-hash-response-model";
import { SendTxRequestConvert, SendTxRequestModel } from "../models/send-tx-request-model";
import { requestToVottunApi } from "./clientVottun";


export async function createWallet(reqBody: CreateWalletModel) {
    const response = await requestToVottunApi({
        method: "POST",
        endpoint: "/cwll/v1/hash/new", 
        body: Convert.createWalletModelToJson(reqBody)
    });
    console.log("response", response);
    return response;
}

export async function getCustodiedWallets() {
    const response = await requestToVottunApi({
        method: "GET",
        endpoint: "/cwll/v1/evm/wallet/custodied/list", 
        body: null
    });
    return response;
}


export async function sendOTPCode(email: string) {
    const response = await requestToVottunApi({
        method: "POST",
        endpoint: "/cwll/v1/2fa/signature/otp/new?email=" + email, 
        body: null
    });
    return response;
}

export async function sendNativeTxFromCustWallet(reqBody: SendTxRequestModel, strategy: number) {
    const response = await requestToVottunApi({
        method: "POST",
        endpoint: "/core/v1/evm/wallet/custodied/transfer?strategy=" + strategy, 
        body: SendTxRequestConvert.sendTxRequestModelToJson(reqBody)
    });
    return response;
}

export async function sendTXFromCustWallet(reqBody: SendTxRequestModel, strategy: number) {
    const response = await requestToVottunApi({
        method: "POST",
        endpoint: "/core/v1/evm/wallet/custodied/transact/mutable?strategy=" + strategy, 
        body: SendTxRequestConvert.sendTxRequestModelToJson(reqBody)
    });
    return response;
}

export async function getNativeTokenBalance(accountAddress: string, networkId: number) {
    const response = await requestToVottunApi({
        method: "GET",
        endpoint: "/core/v1/evm/chain/" + accountAddress + "/balance?network=" + networkId, 
        body: null
    });
    return response;
}