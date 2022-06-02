import * as sdk from "../index";
export class LoopringAPIClass {
  public static userAPI: UserAPI;
  public static exchangeAPI: ExchangeAPI;
  public static ammpoolAPI: AmmpoolAPI;
  public static walletAPI: WalletAPI;
  public static wsAPI: WsAPI;
  public static nftAPI: NFTAPI;
  public static delegate: DelegateAPI;
  public static globalAPI: GlobalAPI;
  public static contractAPI: typeof ContractAPI;
  public static __chainId__: sdk.ChainId;
  public static InitApi = (chainId: sdk.ChainId) => {
    LoopringAPI.userAPI = new UserAPI({ chainId });
    LoopringAPI.exchangeAPI = new ExchangeAPI({ chainId });
    LoopringAPI.globalAPI = new GlobalAPI({ chainId });
    LoopringAPI.ammpoolAPI = new AmmpoolAPI({ chainId });
    LoopringAPI.walletAPI = new WalletAPI({ chainId });
    LoopringAPI.wsAPI = new WsAPI({ chainId });
    LoopringAPI.nftAPI = new NFTAPI({ chainId });
    LoopringAPI.delegate = new DelegateAPI({ chainId });
    LoopringAPI.__chainId__ = chainId;
    LoopringAPI.contractAPI = ContractAPI;
  };
}
/* env:
 * test:  sdk.ChainId.GOERLI
 * eth:  sdk.ChainId.MAINNET
 */
LoopringAPIClass.InitApi({sdk.ChainId.MAINNET});


const { exchangeInfo } = await LoopringAPI.exchangeAPI.getExchangeInfo();
const LOOPRING_EXPORTED_ACCOUNT = {}
LOOPRING_EXPORTED_ACCOUNT.exchangeAddress =  exchangeInfo;
const { accInfo } = await LoopringAPI.exchangeAPI.getAccount({
  owner: LOOPRING_EXPORTED_ACCOUNT.address,
});
console.log(accInfo);