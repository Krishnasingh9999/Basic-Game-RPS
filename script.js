let usrScr = 0;
let compscr = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const Uimg = document.querySelector("#Uimg");
const Cpimg = document.querySelector("#Cpimg");


const usrScrPara = document.querySelector("#user-scr");
const cmpuScrPara = document.querySelector("#comp-scr");

const genCmpuChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const rndmIdx = Math.floor(Math.random() * 3);
    return options[rndmIdx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor = "rgb(8, 32, 61)";    
};


const UpdateImg = (userChoice, cmpuChoice) => {


    Uimg.innerHTML = "";
    Cpimg.innerHTML = "";

    const userImg = document.createElement("img");
    const compImg = document.createElement("img");
    
    userImg.src = `./${userChoice}.png`;
    compImg.src = `./${cmpuChoice}.png`;

    userImg.alt = userChoice;
    compImg.alt = cmpuChoice;
    userImg.width = 50;
    compImg.width = 50;

    Uimg.appendChild(userImg);
    Cpimg.appendChild(compImg);
};


const showWinner = (usrWin, userChoice, cmpuChoice) => {
    if(usrWin){
        usrScr++;
        usrScrPara.innerText = usrScr;
        msg.innerText = `You win! Your ${userChoice} beats ${cmpuChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compscr++;
        cmpuScrPara.innerText = compscr;
        msg.innerText =  `You lose. ${cmpuChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //Generate cmpu choice
    const cmpuChoice = genCmpuChoice();

    UpdateImg(userChoice, cmpuChoice);

    if(userChoice === cmpuChoice){
        //Draw Game
        console.log(userChoice);
        console.log(cmpuChoice);
        drawGame();
    }
    else{
        let usrWin = true;
        if(userChoice === "rock"){
            //scissor, paper
            usrWin = cmpuChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            //scissor, rock
            usrWin = cmpuChoice === "scissor" ? false: true;
        }
        else{
            //rock, paper
            usrWin = cmpuChoice === "rock" ? false: true;
        }
        showWinner(usrWin, userChoice, cmpuChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});

// console.log(drawGame());
