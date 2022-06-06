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
    //this.generateKeyPair = sdk.generateKeyPair();
    this.ConnectorNames = sdk.ConnectorNames;
    this.UserNFTTxTypes = sdk.UserNFTTxTypes;
    this.__chainId__ = chainId;
    this.contractAPI = sdk.ContractAPI;
    this.KEY_MESSAGE = sdk.KEY_MESSAGE;
    this.generateKeyPair2 = sdk.generateKeyPair2;
    this.generateKeyPair = sdk.generateKeyPair;

  };
}

class LoopringAccount {
  constructor(address){
    this.address = address;
    this.privateKey = '';//"491aecdb1d5f6400a6b62fd12a41a86715bbab675c37a4060ba115fecf94083c";
    this.accountId =  0;  //12454;
    this.accInfo = {}; //
    this.exchangeAPI = '';  //"0x2e76EBd1c7c0C8e7c2B875b6d505a260C525d25e";
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



async function signatureKeyPairMock(LOOPRING_EXPORTED_ACCOUNT, LoopringAPI) {
  console.log(LOOPRING_EXPORTED_ACCOUNT.account);
  let keyseed = ''
  if (LOOPRING_EXPORTED_ACCOUNT.account.accInfo.keySeed != ''){
      keyseed= LOOPRING_EXPORTED_ACCOUNT.account.accInfo.keySeed
  } else {
      keyseed = LoopringAPI.KEY_MESSAGE.replace(
        "${exchangeAddress}",
        LOOPRING_EXPORTED_ACCOUNT.exchangeAPI.exchangeInfo.exchangeAddress
      ).replace("${nonce}", (LOOPRING_EXPORTED_ACCOUNT.account.accInfo.nonce - 1).toString())
  }
  const parms = {
    web3: window.web3,
    address: LOOPRING_EXPORTED_ACCOUNT.address,
    keySeed:keyseed,
    walletType: LoopringAPI.ConnectorNames.MetaMask,
    chainId: LoopringAPI.__chainId__,
  }
  console.log(parms);
  const eddsaKey = await LoopringAPI.generateKeyPair(parms); // can use gamestop.request({ method: 'personal_sign',params:["test","0xe5B6B887570Ae0EC87B379e1576C4fe0b892BA38",""] }) here I think
  //const sig = await window.gamestop.request({ method: 'personal_sign', params:[parms.keySeed,parms.address,""] });
  //const eddsaKey = await LoopringAPI.generateKeyPair2(sig);
  return eddsaKey;
}

async function setupWeb3User(address) {
    if (typeof sdk == 'undefined') var sdk = window.Bundle;
    // if (typeof WEB3 == 'undefined') var WEB3 = new Web3;
    let LoopringAPI = new LoopringAPIClass(sdk);
    const LOOPRING_EXPORTED_ACCOUNT = new LoopringAccount(address);
    LOOPRING_EXPORTED_ACCOUNT.exchangeAPI = await LoopringAPI.exchangeAPI.getExchangeInfo()
    LOOPRING_EXPORTED_ACCOUNT.account = await LoopringAPI.exchangeAPI.getAccount({
        owner: LOOPRING_EXPORTED_ACCOUNT.address,
      });
    LOOPRING_EXPORTED_ACCOUNT.accountId = LOOPRING_EXPORTED_ACCOUNT.account.accInfo.accountId;
    console.log('Got account:',LOOPRING_EXPORTED_ACCOUNT.account);
    
    window.web3 = new Web3(window.gamestop);
    const eddsaKey = await signatureKeyPairMock(LOOPRING_EXPORTED_ACCOUNT, LoopringAPI);
    LOOPRING_EXPORTED_ACCOUNT.eddsaKey = eddsaKey;
    LOOPRING_EXPORTED_ACCOUNT.apiKeyData = await LoopringAPI.userAPI.getUserApiKey({
      accountId: LOOPRING_EXPORTED_ACCOUNT.account.accInfo.accountId}, eddsaKey.sk
    );
    window.LOOPRING_EXPORTED_ACCOUNT = LOOPRING_EXPORTED_ACCOUNT;
    window.LoopringAPI = LoopringAPI;
    console.log('connected!');
    getNFTs();
    return true;
}

async function getStorageId(nftTokenId){
  let request = {
    accountId:  window.LOOPRING_EXPORTED_ACCOUNT.account.accInfo.accountId,
    sellTokenId: nftTokenId ?? window.SELECTED_NFT.tokenId,
  };
  let apiKey = window.LOOPRING_EXPORTED_ACCOUNT.apiKeyData.apiKey;
  const storageId = await window.LoopringAPI.userAPI.getNextStorageId(request, apiKey);
  return storageId;
}

async function getGasFee(){
  let request = {
    accountId:  window.LOOPRING_EXPORTED_ACCOUNT.account.accInfo.accountId,
    requestType: window.Bundle.OffchainNFTFeeReqType.NFT_TRANSFER,
    amount: "0",
  };
  let apiKey = window.LOOPRING_EXPORTED_ACCOUNT.apiKeyData.apiKey;

  const fee = await  window.LoopringAPI.userAPI.getNFTOffchainFeeAmt(request,apiKey);
  console.log("fee:", fee);
  document.getElementById("gas").textContent='Current Gas In Ether: ' + Web3.utils.fromWei(fee.fees['ETH'].fee,'ether')
  return fee.fees;
}

async function sendSelectedNftToUser(w){
  if (typeof window.LOOPRING_EXPORTED_ACCOUNT === 'undefined') {
    alert("Connect your wallet first!");
    return;
  }
  if (typeof window.SELECTED_NFT === 'undefined') {
    alert("Select an NFT First");
    return;
  }
  let GAS = await getGasFee();
  let storageId = await getStorageId();
  let LOOPRING_EXPORTED_ACCOUNT = window.LOOPRING_EXPORTED_ACCOUNT;
  let apiKey = LOOPRING_EXPORTED_ACCOUNT.apiKeyData.apiKey;
  let web3 = window.web3;
  let request = {
    request: {
      exchange: LOOPRING_EXPORTED_ACCOUNT.exchangeAPI.exchangeInfo.exchangeAddress,
      fromAccountId: LOOPRING_EXPORTED_ACCOUNT.accountId,
      fromAddress: LOOPRING_EXPORTED_ACCOUNT.address,
      toAccountId: 0, // toAccountId is not required, input 0 as default
      toAddress: w,
      token: {
        tokenId: parseInt(window.SELECTED_NFT.tokenId),
        nftData: window.SELECTED_NFT.nftData,
        amount: "1",
      },
      maxFee: {
        tokenId: GAS["ETH"].tokenId,
        amount: GAS["ETH"].fee ?? "9400000000000000000",
      },
      storageId: storageId.offchainId,
      validUntil: LOOPRING_EXPORTED_ACCOUNT.validUntil,
    },
    web3,
    chainId: window.LoopringAPI.__chainId__,
    walletType: window.LoopringAPI.ConnectorNames.Unknown,
    eddsaKey: LOOPRING_EXPORTED_ACCOUNT.eddsaKey.sk,
    apiKey,
  }
  console.log(request);
  const transferResult = await LoopringAPI.userAPI.submitNFTInTransfer(request);
  console.log("transfer Result:", transferResult);
  
  getNFTHistory();
}

async function getNFTHistory(){
  const result = await window.LoopringAPI.userAPI.getUserNFTTransactionHistory(
    {
      accountId: window.LOOPRING_EXPORTED_ACCOUNT.accountId,
      types: [
        LoopringAPI.UserNFTTxTypes.TRANSFER,
      ],
      limit: 1000,
    },
    window.LOOPRING_EXPORTED_ACCOUNT.apiKeyData.apiKey
  );
  console.log("getUserNFTTransactionHistory:", result);
  result.userNFTTxs.forEach(trx => {
    let nftDataSent = trx.nftData
    let tag = buildNFTag(nftDataSent)
    if (tag) {
      let user = trx.receiverAddress
      updateNftSentFeildForUserWithTag(user,nftDataSent,tag)
    }
  });
  return ;
}

function buildNFTag(nftData){
  var nftImg = document.querySelector("img[nftData='"+nftData+"']")
  console.log(nftImg,nftData)
  if (nftImg){
      var tag = new Image()
      tag.style='max-width:100px;border:1px black solid;'
      tag.src = nftImg.getAttribute('src')
      tag.id = nftData
      return tag
  }
  return false;
}

function updateNftSentFeildForUserWithTag(user,nftData,tag){
  var cell = document.getElementById('sent-'+user)
  if (cell){
    console.log('Oooh youve already sent '+nftData+' to '+ user)
    if (cell.querySelector('img[id="'+nftData+'"]')) {
      console.log('Already added to table. skipping')
      return
    } else {
      cell.appendChild(tag);
    }
  }
  
}

async function getNFTs(){
  let request = {
    accountId:  window.LOOPRING_EXPORTED_ACCOUNT.account.accInfo.accountId
  };
  let apiKey = window.LOOPRING_EXPORTED_ACCOUNT.apiKeyData.apiKey;

  const nftsData = await  window.LoopringAPI.userAPI.getUserNFTBalances(request,apiKey);
  console.log("nftsData:", nftsData);

  // nftsData = {
  //   raw_data:{},
  //   totalNum: 4,
  //   userNFTBalances: [
  //     {accountId: 104048,
  //     deploymentStatus: "DEPLOYED",
  //     id: 295106,
  //     isCounterFactualNFT: true,
  //     locked: "0",
  //     nftData: "0x1b276fe346f468bd3d4296b7691c754f797459bc473e3d57357a10099966b605",
  //     nftId: "0x3f6d88357a16ceda023feace19b50af597da2d75da96275c3275def348184552",
  //     nftType: "ERC1155",
  //     pending:{
  //         deposit: "0",
  //         withdraw: "0"
  //       },
  //     tokenAddress: "0xbd7d7e267783423590096d716b1a0d0766200d89",
  //     tokenId: 32771,
  //     total: "1"
  //   }
  //   ]
  // }

  nftsData.userNFTBalances.forEach(nft => {
    let cid = window.LoopringAPI.nftAPI.ipfsNftIDToCid(nft.nftId);
    fetch('https://loopring.mypinata.cloud/ipfs/'+cid)
      .then(res => res.json())
      .then(nftJson => {
          // console.log(nftJson);
          //{ // data looks like:
            // description: "r/place final view of the SuperStonk subreddit submission! Credit to u/Evanlyboy for posting at https://www.reddit.com/r/place/comments/twhufb/made_an_8k_resolution_of_the_currently_last/. This token is being used to help activate Layer 2 wallets for new users the GameStop beta NFT marketplace. It likely will not show up in the users profile, but should establish their wallet on Loopring."
            // image: "ipfs://QmUNh56816AMchWSZpBX2HdUUfa7FUVR7S6pzVvPtH9w3N"
            // name: "r/Superstonk meets r/Place"
            // royalty_percentage: 10
          //}
          // https://infura-ipfs.io/ipfs/QmReGwgLd85ps6fXw7sZgQw9w8VH6T1SxZ5KQDwjcYMNWf
          var nftSection = document.getElementById('nfts')
          var nftSlot = document.createElement('div')
          var image = new Image(200);
          var p = document.createElement('p')
          // buid tree
          nftSection.appendChild(nftSlot)
          nftSlot.appendChild(p)
          nftSlot.appendChild(image);
          image.src = 'https://infura-ipfs.io/ipfs/'+nftJson.image.replace('ipfs://','');
          image.id=nft.id;
          //set attributes
          nftSlot.setAttribute('class','one-nft')
          image.classList.add('nft')
          image.setAttribute('nftData',nft.nftData)
          image.setAttribute('tokenId',nft.tokenId)
          p.setAttribute('class','badge alert-danger')
          p.textContent = 'x'+nft.total
          //creat listener
          image.addEventListener('click',e =>{
            console.log("clicked ",e.target.id);
            var clickedEl = document.getElementById(e.target.id)
            window.SELECTED_NFT = {
              nftId:clickedEl.getAttribute('id'),
              tokenId:clickedEl.getAttribute('tokenId'),
              nftData:clickedEl.getAttribute('nftData'),
            };
            let nftElements = document.getElementsByClassName("nft");
            for (let nftEl = 0; nftEl < nftElements.length; nftEl++) {
              nftElements[nftEl].style.border="none"; 
            }
            document.getElementById(e.target.id).style.border="5px solid #0000FF";
            hideNftsSentAlready();
          });
      })
    .catch(err => {throw err});
  });

  return nftsData;
}

async function hideNftsSentAlready() {
  // let table = document.getElementById('users')
  // //show all first
  
  // let cell = table.querySelector('img[id="'+nftData+'"]')
  // let row = cell.
}



