const playBtn = document.querySelector("#play-btn"),
playAgainBtn = document.querySelector("#play-again-btn"),
pauseBtn = document.querySelector("#pause-btn"),
rockImg = document.querySelector("#rock"),
paperImg = document.querySelector("#paper"),
scissorImg = document.querySelector("#scissor");
let [userWeapon, comWeapon] = ['', ''],
[userScore, comScore, tieScore] = [0, 0, 0];





function updateScore(){
    if(userWeapon == "rock" && comWeapon == "scissor")
        userScore++;
    else if(userWeapon == "paper" && comWeapon == "scissor")
        userScore++;
    else if(userWeapon == "scissor" && comWeapon == "scissor")
        tieScore++;
    else if(userWeapon == "rock" && comWeapon == "paper")
        comScore++;
    else if(userWeapon == "paper" && comWeapon == "paper")
        tieScore++;
    else if(userWeapon == "scissor" && comWeapon == "paper")
        comScore++;
    else if(userWeapon == "rock" && comWeapon == "rock")
        tieScore++;
    else if(userWeapon == "paper" && comWeapon == "rock")
        userScore++;
    else if(userWeapon == "scissor" && comWeapon == "rock")
        comScore++;
    console.log(userScore, comScore, tieScore);
}


function userInput(){
    rockImg.classList.remove("pointer-none")
    paperImg.classList.remove("pointer-none")
    scissorImg.classList.remove("pointer-none")
    rockImg.addEventListener('click', async() => {
        userWeapon = "rock";
        await computerInput();
        updateScore();
    });
    paperImg.addEventListener('click', async() => {
        userWeapon = "paper";
        await computerInput();
        updateScore();
    });
    scissorImg.addEventListener('click', async() => {
        userWeapon = "scissor";
        await computerInput();
        updateScore();
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
}
playAgainBtn.addEventListener('click', () => playAgainBtnClick())
function playAgainBtnClick(){
    alert("again")
}
pauseBtn.addEventListener('click', () => pauseBtnClick())
function pauseBtnClick(){
    alert("pause")
}


