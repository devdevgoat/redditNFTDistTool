//An infura ID, or custom ETH node is required for Ethereum, for Binance Smart Chain you can just use their public endpoint
var provider = new WalletConnectProvider.default({ 
        infuraId: "6d94ed08a5594416826a55072fb6e93f",
        qrcodeModalOptions: {
            mobileLinks: [
              "rainbow",
              "metamask",
              "argent",
              "trust",
              "imtoken",
              "pillar",
            ],
          },
    });
  

async function showQr() {
    //present the Wallet Connect QR code
    provider.enable().then(function(res){ 
        //get wallet addrs and then wrap this into the Web3 JS
        let web3 = new Web3(provider);
        
        //  Get Accounts
        web3.eth.getAccounts().then(accounts => {
            promptRedditLogin(accounts[0]);
        });
        //now do all the web3 stuff you want...
        //awesome web3 application goes here
    });
}

async function metaMask(){
    console.log('click');
    ethereum.request({ method: 'eth_requestAccounts' }).then(account =>{
        promptRedditLogin(account);
    }
    );
}
    
async function promptRedditLogin(account) {
    console.log("Found account ",account);
    let sessionId = $('#session').val()
    window.location.href = "/connected?sessionId="+sessionId+"&wallet="+account;
}

window.onload = function () {
   
    // Subscribe to accounts change
    provider.on("accountsChanged", (accounts) => {
        console.log(accounts);
    });
    
    // Subscribe to chainId change
    provider.on("chainChanged", (chainId) => {
        console.log(chainId);
    });
    
    // Subscribe to session disconnection
    provider.on("disconnect", (code, reason) => {
        console.log(code, reason);
    });
}


