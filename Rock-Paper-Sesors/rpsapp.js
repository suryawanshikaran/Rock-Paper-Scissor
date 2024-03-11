let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
     const randIdx = Math.floor(Math.random() * 3);
     return options[randIdx];
    //rock , paper , scissors
};

const drawGame = () => {
    // console.log("game was draw..");
    msg.innerText = "game draw, play again";
    msg.style.backgroundColor = "rgb(75, 75, 219)";
};

const showWin = (userWin,userChoice,compChoice) => {
    if(userWin){
        // console.log("You Win!");
        userScore++;
        userScorePara.innerText = userScore;

        msg.innerText = "user win🕺 your " + userChoice + " beats " + compChoice;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;

        // console.log("You Lose!");
        msg.innerText = "user lose 🤦‍♂️" + compChoice + " beats your "+ userChoice;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //generate computer choice - modular way
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if(userChoice === compChoice){
        //Draw candition
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock , paper
           userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice clicked",userChoice);
    playGame(userChoice);
    });
});