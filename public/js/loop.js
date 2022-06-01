// import { Web3 } from "./web3.min";

let sdk = window.Bundle;

class LoopringAPIClass{
  constructor(sdk) {
    let chainId = sdk.ChainId.MAINNET;
    this.userAPI = new sdk.UserAPI({ chainId });
    this.exchangeAPI = new sdk.ExchangeAPI({ chainId });
    this.globalAPI = new sdk.GlobalAPI({ chainId });
    this.ammpoolAPI = new sdk.AmmpoolAPI({ chainId });
    this.walletAPI = new sdk.WalletAPI({ chainId });
    this.wsAPI = new sdk.WsAPI({ chainId });
    this.nftAPI = new sdk.NFTAPI({ chainId });
    this.delegate = new sdk.DelegateAPI({ chainId });
    this.generateKeyPair = sdk.generateKeyPair();
    this.ConnectorNames = sdk.ConnectorNames;
    this.__chainId__ = chainId;
    this.contractAPI = sdk.ContractAPI;
    this.KEY_MESSAGE = sdk.KEY_MESSAGE;
    this.generateKeyPair = sdk.generateKeyPair;
  };
}

class LoopringAccount {
  constructor(address){
    this.address = address;
    this.privateKey = '';//"491aecdb1d5f6400a6b62fd12a41a86715bbab675c37a4060ba115fecf94083c";
    this.accountId =  0;  //12454;
    this.accInfo = {}; //
    this.exchangeAddress = '';  //"0x2e76EBd1c7c0C8e7c2B875b6d505a260C525d25e";
    this.chainId = 1;
    this.nftTokenAddress =  '';  //"0x8394cB7e768070217592572582228f62CdDE4FCE";
    this.nftTokenId =  0;  //32768;
    this.nftId =  '';  //"0xa0ce8990402955e559799af24ea765b14ffecc32dfa1cce2dadaf20016b074e6";
    this.nftData =  '';  //"0x1a2001aac7a1fd00cef07889cdb67b1355f86e5bc9df71cfa44fa1c7b49f598f";
    this.gasPrice =  0;  //20; // for test
    this.gasLimit =  0;  //200000; // for test
    this.validUntil = Math.round(Date.now() / 1000) + 30 * 86400;
    this.CUSTOMER_KEY_SEED = "XXXXXX" + " with key nonce: " + "${nonce}";
  }
}

async function signatureKeyPairMock(LOOPRING_EXPORTED_ACCOUNT, LoopringAPI,WEB3) {
  console.log(WEB3.eth.personal);
  const parms = {
    web3: WEB3,
    address: LOOPRING_EXPORTED_ACCOUNT.address,
    keySeed:
    LOOPRING_EXPORTED_ACCOUNT.accInfo.keySeed ??
      LoopringAPI.KEY_MESSAGE.replace(
        "${exchangeAddress}",
        LOOPRING_EXPORTED_ACCOUNT.exchangeAddress
      ).replace("${nonce}", (LOOPRING_EXPORTED_ACCOUNT.accInfo.nonce - 1).toString()),
    walletType: LoopringAPI.ConnectorNames.MetaMask,
    chainId: LoopringAPI.__chainId__,
  }
  console.log(parms);
  const eddsaKey = await LoopringAPI.generateKeyPair(parms); // can use gamestop.request({ method: 'personal_sign',params:["test","0xe5B6B887570Ae0EC87B379e1576C4fe0b892BA38",""] }) here I think
  return eddsaKey;
}

async function setupWeb3User(address) {
    if (typeof sdk == 'undefined') var sdk = window.Bundle;
    // if (typeof WEB3 == 'undefined') var WEB3 = new Web3;
    let LoopringAPI = new LoopringAPIClass(sdk);
    const LOOPRING_EXPORTED_ACCOUNT = new LoopringAccount(address);
    LOOPRING_EXPORTED_ACCOUNT.exchangeAddress = await LoopringAPI.exchangeAPI.getExchangeInfo()
    LOOPRING_EXPORTED_ACCOUNT.accInfo = await LoopringAPI.exchangeAPI.getAccount({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
      });
    
    const eddsaKey = await signatureKeyPairMock(LOOPRING_EXPORTED_ACCOUNT, LoopringAPI,window.web3);
    console.log("eddsaKey:", eddsaKey.sk);
    LOOPRING_EXPORTED_ACCOUNT.apiKey = await LoopringAPI.userAPI.getUserApiKey({
      accountId: accInfo.accountId}, eddsaKey.sk
    );
    return await LOOPRING_EXPORTED_ACCOUNT;
}