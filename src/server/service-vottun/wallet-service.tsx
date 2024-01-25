import { getVottunClient } from "./clientVottun";



export async function getCustodiedWallets() {

    const response = await getVottunClient({
        method: "",
        endpoint: "/evm/wallet/custodied/list", 
        body: null
    });
   

    return response;
}