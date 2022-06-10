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

async function gameStop(){
    if( typeof gamestop !== 'undefined'){
       await gamestop.enable();
        // let acct = await gamestop.request({ method: 'eth_requestAccounts' });
       console.log(gamestop.currentAddress);
       await setupWeb3User(gamestop.currentAddress);
       getGasFee();
       getNFTHistory();
       document.getElementById('gameStopWallet').remove();
       createNftTable();
    } else {
        alert('You need to install the gamestop wallet via the chrome web store.');
    }
}

async function promptRedditLogin(account) {
    console.log("Found account ",account);
    let sessionId = $('#session').val()
    window.location.href = "/connected?sessionId="+sessionId+"&wallet="+account;
}

function loadDashboard(){
    let url = document.getElementById("url").value;
    let parts = url.split('/');
    let submission_id = -1;
    if (!parts.includes("comments") && !parts.includes("gallery")){
        submission_id = parts[-1];
        if( parts.includes('r')){
            submission_id = -1;
        }
    } else if (parts.includes('gallery')) {
        submission_id = parts[parts.indexOf('gallery')+1]
    } else if (parts[parts.length-1]=='comments' ) {
        submission_id -1;
    } else {
        submission_id = parts[parts.indexOf('comments')+1]
    }
    let invalid = ['','undefined',-1];

    if (submission_id == '' || typeof submission_id == 'undefined') submission_id = -1;

    if (submission_id != -1){
        window.location.href = '/dashboard/'+submission_id
    } else {
        alert("Invalid Reddit link.")
    }
    
}

async function sendToEnsOrEthAddr(addr){
    if (addr.startsWith('0x')) {
        console.log("Sending to ",addr)
        sendSelectedNftToUser(addr);
    } 
    else if(addr.endsWith('.eth')) {
        LoopringAPI.walletAPI.getAddressByENS({fullName: addr.toLowerCase()}).then(converted=>{
            console.log("Sending to ",converted.address)
            sendSelectedNftToUser(converted.address)
        });
    } else {
        console.log("Invalid address ",addr)
        return
    }
    
}
  
 async function createNftTable(){
    if (!window.redditData)  {
      alert('No data received.. bad link?');
      return
    }
    if(!window.gamestop){
      alert('Connect reddit wallet first')
    }
    let table = document.getElementById('userTable');
    let r = table.insertRow(0)
    r.insertCell(0).textContent = 'Reddit User'
    r.insertCell(1).textContent = 'NFT\'s Already Owned'
    r.insertCell(2).textContent = 'Action'
    $.each(window.redditData, function(user, addresses) {
        buildTableRow(user,addresses);
    });
  }
  
  
  async function buildTableRow(user,addressArray){
    // console.log(addressArray);
    let table = document.getElementById('userTable');
    addressArray.forEach(addr => {
        // console.log(user,addr)
        let r = table.insertRow(-1)
        let userCell = r.insertCell(0)
        let nftListCell = r.insertCell(1)
        let sendButtonCell = r.insertCell(2)
  
        userCell.textContent = user
        nftListCell.setAttribute('id','sent-'+addr)
        sendButtonCell.innerHTML = `<button type="button" class="btn btn-danger" id="gameStopWallet" onclick="sendToEnsOrEthAddr('${addr}');">Send Selected NFT</button>`     
    });
    
  }


window.onload = function () {
    // global sdk = window.Bundle;
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




