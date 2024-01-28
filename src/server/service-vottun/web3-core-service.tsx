import { DeploySmartContractConvert, DeploySmartContractModel } from "../models/deploy-smart-contract-model";
import { AllowanceConvert, GetAllowanceModel } from "../models/get-allowance-model";
import { Convert, TransferERC20Model } from "../models/transfer-erc20-model";
import { requestToVottunApi } from "./clientVottun";


export async function transferERC20(requestBody: TransferERC20Model) {
    const response = await requestToVottunApi({
        method: "POST",
        endpoint: "/erc/v1/erc20/transfer", 
        body: Convert.transferERC20ModelToJson(requestBody)
    });
    return response;
}

export async function getAllowance(requestBody: GetAllowanceModel) {
    const response = await requestToVottunApi({
        method: "GET",
        endpoint: "/erc/v1/erc20/allowance", 
        body: AllowanceConvert.getAllowanceModelToJson(requestBody)
    });
    return response;
}

export async function getAvailableNetworks() {
    const response = await requestToVottunApi({
        method: "GET",
        endpoint: "/core/v1/evm/info/chains", 
        body: null
    });
    console.log(response);
    return response;
}

export async function deploySmartContract(reqBody: DeploySmartContractModel) {
    const response = await requestToVottunApi({
        method: "POST",
        endpoint: "/core/v1/evm/contract/deploy", 
        body: DeploySmartContractConvert.deploySmartContractModelToJson(reqBody)
    });
    return response;
}