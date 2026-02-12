// ================= ELEMENT =================
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// preload (ANTI LAG)
new Image().src = "cat_dance.gif";


// ================= OPEN ENVELOPE =================
envelope.addEventListener("click", () => {

    envelope.style.display = "none";
    letter.style.display = "flex";

    requestAnimationFrame(()=>{
        letterWindow.classList.add("open");
    });
});


// ================= MOVE NO BUTTON =================

function moveNoButton(){

    const containerRect = letterWindow.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // boundary di dalam window (PRO behavior)
    const padding = 20;

    const maxX = containerRect.width - btnRect.width - padding;
    const maxY = containerRect.height - btnRect.height - padding;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

    noBtn.style.transform = "none";

    // vibration = emotional feedback
    if(navigator.vibrate){
        navigator.vibrate(35);
    }

    growYesButton();
}


// Desktop
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", (e)=>{
    e.preventDefault();
    moveNoButton();
});


// ================= YES BUTTON GROW =================

let yesScale = 1;

function growYesButton(){

    yesScale += 0.15;

    yesBtn.style.transform = `scale(${yesScale})`;

    // kalau sudah besar → auto dominate screen
    if(yesScale > 2){

        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = "translate(-50%, -50%) scale(2.5)";
        yesBtn.style.zIndex = "999";
    }
}



// ================= YES CLICK =================

yesBtn.addEventListener("click", () => {

    title.textContent = "Yippeeee 💖";

    catImg.src = "cat_dance.gif";

    letterWindow.classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    // micro vibration
    if(navigator.vibrate){
        navigator.vibrate([60,40,60]);
    }
});