const playBtn = document.querySelector("#play-btn"),
continueBtn = document.querySelector("#continue-btn"),
restartBtn = document.querySelector("#restart-btn"),
chooseWeaponPara = document.querySelector("#choose-weapon"),
imageDivs = document.querySelectorAll(".weapon-box div"),
rockImage = document.querySelector("#rock"),
paperImage = document.querySelector("#paper"),
scissorImage = document.querySelector("#scissor"),
tone = document.querySelector("audio");
let comScore =0, playerScore=0;
saveScore() 

// click on restart button score set by 0
restartBtn.addEventListener("click", ()=>{
    let userWants = confirm("If you restart the game your score settled by 0:")
    console.log(userWants)
    if(userWants){
        [comScore, playerScore] = [0, 0];
        saveScore()
        document.querySelector(".result").classList.add("hide");
        playBtn.classList.remove("hide");
        chooseWeaponPara.classList.add("hide")
        rockImage.classList.add("pointer-none")
        paperImage.classList.add("pointer-none")
        scissorImage.classList.add("pointer-none")
    }
})

// click on continueBtn continue the game 
continueBtn.addEventListener("click", ()=>{
    document.querySelector(".result").classList.add("hide");
})

function resultShowFun(theme, status, description, msg, btn1, btn2, ring){
    tone.src = ring;
    tone.play();
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


// function for updateScore 
function updateScoreFun(){
    comScore = document.querySelector("#computer-weapon").innerText;
    playerScore = document.querySelector("#player-weapon").innerText;
    if(playerWeapon === "rock" && comWeapon === "rock"){
        resultShowFun("tie", "Game Tie", "You choose 'rock' and computer also choose 'rock'", "Nobody beats someone", "block", "none", "tone/tie.wav");
    }else if(playerWeapon === "rock" && comWeapon === "paper"){
        comScore++;
        resultShowFun("lose", "You Lose", "You choose 'rock' and computer choose 'paper'", "paper beats rock", "block", "block", "tone/lose.wav");
        saveScore()    
    }else if(playerWeapon === "rock" && comWeapon === "scissor"){
        playerScore++;
        resultShowFun("win", "You Win", "You choose 'rock' and computer choose 'scissor'", "rock beats scissor", "block", "block", "tone/win.wav");
        saveScore()    
    }else if(playerWeapon === "paper" && comWeapon === "rock"){
        playerScore++;
        resultShowFun("win", "You Win", "You choose 'paper' and computer choose 'rock'", "paper beats rock", "block", "block", "tone/win.wav");
        saveScore()    
    }else if(playerWeapon === "rock" && comWeapon === "scissor"){
        playerScore++;
        resultShowFun("win", "You Win", "You choose 'rock' and computer choose 'scissor'", "rock beats scissor", "block", "block", "tone/win.wav");
        saveScore()    
    }else if(playerWeapon === "paper" && comWeapon === "rock"){
        playerScore++;
        resultShowFun("win", "You Win", "You choose 'paper' and computer choose 'rock'", "paper beats rock", "block", "block", "tone/win.wav");
        saveScore()    
    }else if(playerWeapon === "paper" && comWeapon === "paper"){
        resultShowFun("tie", "Game Tie", "You choose 'paper' and computer also choose 'paper'", "Nobody beats someone", "block", "none", "tone/tie.wav");
    }else if(playerWeapon === "paper" && comWeapon === "scissor"){
        playerScore++;
        resultShowFun("win", "You Win", "You choose 'paper' and computer choose 'scissor'", "paper beats scissor", "block", "block", "tone/win.wav");
        saveScore()    
    }else if(playerWeapon === "scissor" && comWeapon === "rock"){
        comScore++;
        resultShowFun("lose", "You Lose", "You choose 'scissor' and computer choose 'rock'", "rock beats scissor", "block", "block", "tone/lose.wav");
        saveScore()    
    }else if(playerWeapon === "scissor" && comWeapon === "paper"){
        comScore++;
        resultShowFun("lose", "You Lose", "You choose 'scissor' and computer choose 'paper'", "scissor beats paper", "block", "block", "tone/lose.wav");
        saveScore()    
    }else if(playerWeapon === "scissor" && comWeapon === "rock"){
        comScore++;
        resultShowFun("lose", "You Lose", "You choose 'scissor' and computer choose 'rock'", "rock beats scissor", "block", "block", "tone/lose.wav");
        saveScore()    
    }else if(playerWeapon === "scissor" && comWeapon === "paper"){
        comScore++;
        resultShowFun("lose", "You Lose", "You choose 'scissor' and computer choose 'paper'", "scissor beats paper", "block", "block", "tone/lose.wav");
        saveScore()    
    }else if(playerWeapon === "scissor" && comWeapon === "scissor"){
        resultShowFun("tie", "Game Tie", "You choose 'scissor' and computer also choose 'scissor'", "Nobody beats someone", "block", "none", "tone/tie.wav");
    }
}
// function for randomly choose weapon by computer
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
// choose rock weapon by the player on click rock image 
rockImage.addEventListener("click", ()=>{
    comWeaponFun();
    playerWeapon = "rock";
    updateScoreFun();
})
// choose paper weapon by the player on click paper image 
paperImage.addEventListener("click", ()=>{
    comWeaponFun();
    playerWeapon = "paper";
    updateScoreFun();
})
// choose scissor weapon by the player on click scissor image 
scissorImage.addEventListener("click", ()=>{
    comWeaponFun();
    playerWeapon = "scissor";
    updateScoreFun();
})

// play game on click on playBtn
playBtn.addEventListener("click", () => {
    playBtn.classList.add("hide");
    chooseWeaponPara.classList.remove("hide");
    imageDivs.forEach(imageDiv => {
        imageDiv.classList.remove("pointer-none")
    })
})

// save the score on localStorage
function saveScore(){
    localStorage.setItem('data', `<p>You: <span id="player-weapon">${playerScore}</span></p><p>Computer: <span id="computer-weapon">${comScore}</span></p>`)
    showScore();    
}

// show the score that are store in localStorage
function showScore(){
    document.querySelector('.score-box').innerHTML = localStorage.getItem('data');    
}
showScore();
