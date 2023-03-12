//import MetaMaskOnboarding from "metamask-onboarding";

// const ethers = require('ethers');




const player = document.querySelector(".success-anim");

// const onboarding = new MetaMaskOnboarding();
const btn = document.querySelector(".onboard");
const mainPageBtn = document.querySelector("#main-page");
const statusText = document.querySelector("h1");
const statusDesc = document.querySelector(".desc");
const loader = document.querySelector(".loader");
const upArrow = document.querySelector(".up");
const confetti = document.querySelector(".confetti");



const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

let connected = (accounts) => {
  statusText.innerHTML = "Connected!";
  statusDesc.classList.add("account");
  statusDesc.innerHTML = accounts[0];
  btn.style.display = "none";
  mainPageBtn.removeAttribute("hidden");
  mainPageBtn.onclick = aa;
  loader.style.display = "none";
  upArrow.style.display = "none";
  confetti.style.display = "block";
  player.play();
};

async function connectWallet() {
  return await ethereum.request({ method: "eth_accounts" });
}
const aa = ()=>{
 connectWallet().then((accounts) => {
   if (accounts && accounts[0] > 0) {
     const contract = getContract();
    getPolls();
   window.location.replace("./main.html");
  
   }});
}
// const onClickInstallMetaMask = () => {
//   onboarding.startOnboarding();
//   loader.style.display = "block";
// };

function getContract (){
  const provider = new ethers.providers.JsonRpcProvider();
  return new ethers.Contract(config.contractAddress, config.contractABI.ABI, provider);
}
function getPolls(){

}

btn.addEventListener("click", async () => {
  btn.style.backgroundColor = "#cccccc";
  loader.style.display = "block";

  try {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    connected(accounts);
  } catch (error) {
    console.error(error);
  }
});

const MetaMaskClientCheck = () => {
  if (!isMetaMaskInstalled()) {
    statusText.innerText = "You have to Install a Wallet";
    statusDesc.innerText = "We recommend the MetaMask wallet.";
    btn.innerText = "Install MetaMask";
    // btn.onclick = onClickInstallMetaMask;
  } else {
    connectWallet().then((accounts) => {
      if (accounts && accounts[0] > 0) {
        connected(accounts);
      } else {
        statusText.innerHTML = "Connect your wallet";
        statusDesc.innerHTML = `To decide your fate, please connect your MetaMask wallet.`;
        btn.innerText = "Connect MetaMask";
        upArrow.style.display = "block";
      }
    });
  }
};

MetaMaskClientCheck();


// TIMER

// // Set the date you're counting down to
// let countDownDate = new Date("Mar 31, 2023 00:00:00").getTime();
//
// // Update the count down every 1 second
// let x = setInterval(function() {
//
//   // Get the current date and time
//   let now = new Date().getTime();
//
//   // Find the distance between now and the countdown date
//   let distance = countDownDate - now;
//
//   // Calculate the days, hours, minutes and seconds left
//   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
//
//   // Display the countdown timer in the element with id="countdown"
//   document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
//
//   // If the countdown is finished, display the message
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("countdown").innerHTML = "EXPIRED";
//   }
// }, 1000);
