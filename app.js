const playBtn = document.querySelector("#play-btn"),
playAgainBtn = document.querySelector("#play-again-btn"),
rockImg = document.querySelector("#rock"),
paperImg = document.querySelector("#paper"),
scissorImg = document.querySelector("#scissor"),
playerWeapon = document.querySelector("#player-weapon"),
computerWeapon = document.querySelector("#computer-weapon"),
resultDiv = document.querySelector(".result"),
resultStatus = document.querySelector(".result h3"),
resultMsg = document.querySelector(".result p");
let [userWeapon, comWeapon] = ['', ''];



function resultWin(userChoice, comChoice){
    resultDiv.classList.add('win');
    resultStatus.innerText = 'You Win!'
    resultMsg.innerText = `${userChoice} beats ${comChoice}`;
}
function resultLose(userChoice, comChoice){
    resultDiv.classList.add('lose');
    resultStatus.innerText = 'You lose...'
    resultMsg.innerText = `${comChoice} beats ${userChoice}`;
}
function resultTimeOut(){
    resultDiv.classList.add('timeout');
    resultStatus.innerText = 'Timeout!'
    resultMsg.innerText = `You've not choose weapon!`;
}

function updateWeapon(){
    playerWeapon.innerText = userWeapon;
    computerWeapon.innerText = comWeapon;
}

function updateScore(){
    if(userWeapon == "rock" && comWeapon == "scissor"){
        resultWin(userWeapon, comWeapon);    
        updateWeapon();
    }else if(userWeapon == "paper" && comWeapon == "scissor"){
        resultWin(userWeapon, comWeapon);
        updateWeapon();
    }else if(userWeapon == "scissor" && comWeapon == "scissor"){
        resultTimeOut();
        updateWeapon();
    }else if(userWeapon == "rock" && comWeapon == "paper"){
        resultLose(userWeapon, comWeapon);
        updateWeapon();
    }else if(userWeapon == "paper" && comWeapon == "paper"){
        resultTimeOut();
        updateWeapon();
    }else if(userWeapon == "scissor" && comWeapon == "paper"){
        resultLose(userWeapon, comWeapon);
        updateWeapon();
    }else if(userWeapon == "rock" && comWeapon == "rock"){
        resultTimeOut();
        updateWeapon();
    }else if(userWeapon == "paper" && comWeapon == "rock"){
        resultWin(userWeapon, comWeapon);
        updateWeapon();
    }else if(userWeapon == "scissor" && comWeapon == "rock"){
        resultLose(userWeapon, comWeapon);
        updateWeapon();
    }
}


function userInput(){
    rockImg.classList.remove("pointer-none")
    paperImg.classList.remove("pointer-none")
    scissorImg.classList.remove("pointer-none")
    rockImg.addEventListener('click', async() => {
        userWeapon = "rock";
        await computerInput();
        updateScore();
        resultDiv.classList.remove('hide');
    });
    paperImg.addEventListener('click', async() => {
        userWeapon = "paper";
        await computerInput();
        updateScore();
        resultDiv.classList.remove('hide');
    });
    scissorImg.addEventListener('click', async() => {
        userWeapon = "scissor";
        await computerInput();
        updateScore();
        resultDiv.classList.remove('hide');
    });
}



function computerInput(){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            let comInput= Math.floor(Math.random() * (13 - 1) + 1);
            if(comInput>= 1 && comInput< 5)
                comWeapon = "rock";
            else if(comInput>= 5 && comInput< 9)
                comWeapon = "paper";
            else if(comInput>= 9 && comInput< 13)
                comWeapon = "scissor";
            resolve("resolved");
        }, 1000);
    })   
}

playBtn.addEventListener('click', () => playBtnClick())
function playBtnClick(){
    userInput();
    playBtn.classList.add('hide');
}
playAgainBtn.addEventListener('click', () => playAgainBtnClick())
function playAgainBtnClick(){
    resultDiv.classList.add('hide');
    userInput();
}

