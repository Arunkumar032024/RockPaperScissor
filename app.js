const playBtn = document.querySelector("#play-btn"),
continueBtn = document.querySelector("#continue-btn"),
restartBtn = document.querySelector("#restart-btn"),
chooseWeaponPara = document.querySelector("#choose-weapon"),
imageDivs = document.querySelectorAll(".weapon-box div"),
rockImage = document.querySelector("#rock"),
paperImage = document.querySelector("#paper"),
scissorImage = document.querySelector("#scissor");
let [comWeapon, playerWeapon, comScore, playerScore] = ["", "", 0, 0];

let computerWeaponScore = document.querySelector("#computer-weapon");
let playerWeaponScore = document.querySelector("#player-weapon");



restartBtn.addEventListener("click", ()=>{
    let userWants = confirm("If you restart the game your score settled by 0\nIf you agree with that click on ok")
    if(userWants){
        localStorage.clear();
        document.querySelector(".result").classList.add("hide");
        playBtn.classList.remove("hide");
        chooseWeaponPara.classList.add("hide")
    }
    
})


function saveScoreFun(){
    localStorage.setItem("comScore", computerWeaponScore.innerText);
    localStorage.setItem("playerScore", playerWeaponScore.innerText);
    // localStorage.setItem("data", document.querySelector(".score-box").innerHTML) 
}

function showScoreFun(){
    playerWeaponScore = localStorage.getItem("playerScore");
    computerWeaponScore = localStorage.getItem("comScore");
    // document.querySelector(".score-box").innerHTML = localStorage.getItem("data")
}

showScoreFun();

continueBtn.addEventListener("click", ()=>{
    document.querySelector(".result").classList.add("hide");
})


function resultShowFun(theme, status, description, msg, btn1, btn2){
    document.querySelector(".result").classList.remove("hide");
    document.querySelector(".result").classList.remove("win");
    document.querySelector(".result").classList.remove("lose");
    document.querySelector(".result").classList.remove("tie");
    document.querySelector(".result").classList.add(`${theme}`);
    document.querySelector("#status").innerText = status;
    document.querySelector("#description").innerText = description;
    document.querySelector("#msg").innerText = msg;
    document.querySelector("#continue-btn").style.display = btn1;
    document.querySelector("#restart-btn").style.display = btn2;
}

function updateScorePrint(){
    document.querySelector("#player-weapon").innerText = playerScore;
    document.querySelector("#computer-weapon").innerText = comScore;
    
}

function updateScoreFun(){
    console.log(comWeapon, playerWeapon)
    if(playerScore === "rock" && comWeapon === "rock"){
        resultShowFun("tie", "Game Tie", "You choose 'rock' and computer also choose 'rock'", "Nobody beats someone", "block", "none");
    }else if(playerWeapon === "rock" && comWeapon === "paper"){
        comScore++;
        resultShowFun("lose", "You Lose", "You choose 'rock' and computer choose 'paper'", "paper beats rock", "block", "block");
    }else if(playerWeapon === "rock" && comWeapon === "scissor"){
        playerScore++;
        resultShowFun("win", "You Win", "You choose 'rock' and computer choose 'scissor'", "rock beats scissor", "block", "block");
    }else if(playerWeapon === "paper" && comWeapon === "rock"){
        playerScore++;
        resultShowFun("win", "You Win", "You choose 'paper' and computer choose 'rock'", "paper beats rock", "block", "block");
    }else if(playerWeapon === "paper" && comWeapon === "paper"){
        resultShowFun("tie", "Game Tie", "You choose 'paper' and computer also choose 'paper'", "Nobody beats someone", "block", "none");
    }else if(playerWeapon === "paper" && comWeapon === "scissor"){
        playerScore++;
        resultShowFun("win", "You Win", "You choose 'paper' and computer choose 'scissor'", "paper beats scissor", "block", "block");
    }else if(playerWeapon === "scissor" && comWeapon === "rock"){
        comScore++;
        resultShowFun("lose", "You Lose", "You choose 'scissor' and computer choose 'rock'", "rock beats scissor", "block", "block");
    }else if(playerWeapon === "scissor" && comWeapon === "paper"){
        comScore++;
        resultShowFun("lose", "You Lose", "You choose 'scissor' and computer choose 'paper'", "scissor beats paper", "block", "block");
    }else if(playerWeapon === "scissor" && comWeapon === "scissor"){
        resultShowFun("tie", "Game Tie", "You choose 'scissor' and computer also choose 'scissor'", "Nobody beats someone", "block", "none");
    }
    updateScorePrint();
}
function comWeaponFun(){
    let num = Math.floor(Math.random() * (13 - 1) + 1);
    if(num < 5){
        comWeapon = "rock";
    }else if(num >= 5 && num < 9){
        comWeapon = "paper";
    }else if(num >= 9 && num < 13){
        comWeapon = "scissor";
    }
    
}
rockImage.addEventListener("click", ()=>{
    comWeaponFun();
    playerWeapon = "rock";
    updateScoreFun();
    saveScoreFun()
})
paperImage.addEventListener("click", ()=>{
    comWeaponFun();
    playerWeapon = "paper";
    updateScoreFun();
    saveScoreFun()
})
scissorImage.addEventListener("click", ()=>{
    comWeaponFun();
    playerWeapon = "scissor";
    updateScoreFun();
    saveScoreFun()
})
playBtn.addEventListener("click", () => {
    playBtn.classList.add("hide");
    chooseWeaponPara.classList.remove("hide");
    imageDivs.forEach(imageDiv => {
        imageDiv.classList.remove("pointer-none")
    })
})