const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let player=document.querySelector('#playerScore');
let comp=document.querySelector('#compScore'); 
let playerScore=0;
let compScore=0;
let lastClickedPlayerBtn = null;
let lastClickedCompBtn = null; 
let playerEmoji=document.querySelector('.emoji1');
let compEmoji=document.querySelector('.emoji2');
let resultShown=document.querySelector('#resultShown');
let checkTryAgainBtn=0;

rockBtn.addEventListener('click', () => {
    if(playerScore!=5 && compScore!=5){
        playerEmoji.textContent='🤜';
        return game('rock', rockBtn);
    }
    else{
        return;
    }
});
paperBtn.addEventListener('click', () => {
    if(playerScore!=5 && compScore!=5){
        playerEmoji.textContent='🖐';
        return game('paper', paperBtn);
    }
    else{
        return;
    }
});
scissorsBtn.addEventListener('click', () => {
    if(playerScore!=5 && compScore!=5){
        playerEmoji.textContent='✌';
        return game('scissors', scissorsBtn);
    }
    else{
        return;
    }
    
});

function game(playerSelection, button) {
    if(playerScore!=5 && compScore!=5){
        const computerSelection = getComputerChoice();
        let buttonComp;
        if(computerSelection=="rock"){
            buttonComp=document.querySelector('#rockComp');
            compEmoji.textContent='🤛';
        }
        else if(computerSelection=="paper"){
            buttonComp=document.querySelector('#paperComp');
            compEmoji.textContent='🖐';
        }
        else{
            buttonComp=document.querySelector('#scissorsComp');
            compEmoji.textContent='✌';
        }

        if(lastClickedPlayerBtn){
            lastClickedPlayerBtn.style.backgroundColor='rgba(251, 255, 0, 0.959)';
            lastClickedPlayerBtn.style.color='rgb(90, 90, 90)';
        }
        if(lastClickedCompBtn){
            lastClickedCompBtn.style.backgroundColor='rgba(251, 255, 0, 0.959)';
            lastClickedCompBtn.style.color='rgb(90, 90, 90)';
        }
        const result=playRound(playerSelection, computerSelection);
        if(result=='win'){
            button.style.backgroundColor='rgb(45, 236, 45)';
            buttonComp.style.backgroundColor='rgb(253, 48, 48)';
            button.style.color='white';
            buttonComp.style.color='white';
            resultShown.textContent='You beat Comp!';
        }
        else if(result=='lose'){
            button.style.backgroundColor='rgb(253, 48, 48)';
            buttonComp.style.backgroundColor='rgb(45, 236, 45)';
            button.style.color='white';
            buttonComp.style.color='white';
            resultShown.textContent='Comp beats You!';
        }
        else{
            const colors = ['teal', 'orange', 'cyan', 'magenta'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            button.style.backgroundColor=randomColor;
            buttonComp.style.backgroundColor=randomColor;
            button.style.color='white';
            buttonComp.style.color='white';
            resultShown.textContent='Tie!';
        }
        lastClickedPlayerBtn = button;
        lastClickedCompBtn = buttonComp;
        if(playerScore==5 || compScore==5){
            button.style.backgroundColor='rgba(251, 255, 0, 0.959)';
            button.style.color='rgb(90, 90, 90)';
            buttonComp.style.backgroundColor='rgba(251, 255, 0, 0.959)';
            buttonComp.style.color='rgb(90, 90, 90)';
            finish();
        }
    }
}

function getComputerChoice() {
    let ch = Math.floor(Math.random() * 3);
    if (ch === 0) {
        return "rock";
    }
    else if (ch === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        player.textContent=`Player : ${++playerScore}`;
        return "win";
    }
    else {
        comp.textContent=`Comp : ${++compScore}`;
        return "lose";
    }
}

function finish(){
    lastClickedPlayerBtn.style.backgroundColor='rgba(251, 255, 0, 0.959)';
    lastClickedPlayerBtn.style.color='rgb(90, 90, 90)';
    lastClickedCompBtn.style.backgroundColor='rgba(251, 255, 0, 0.959)';
    lastClickedCompBtn.style.color='rgb(90, 90, 90)';
    
    const emojis=document.querySelector('.emojis');
    const battleGround=document.querySelector('.battleGround');
    let tryAgain=document.createElement('button');
    tryAgain.style.backgroundColor='rgb(204, 30, 204)';
    tryAgain.style.color='white';
    tryAgain.style.cursor='pointer';
    if(playerScore==5){
        resultShown.textContent='You Won the Game!';
        playerEmoji.textContent='😄';
        compEmoji.textContent='😭';
        tryAgain.textContent='Play Again';
        battleGround.insertBefore(tryAgain, emojis);
        tryAgain.addEventListener('click', ()=>reset(tryAgain));
    }
    else{
        resultShown.textContent='You Lost the Game...';
        playerEmoji.textContent='😭';
        compEmoji.textContent='😄';
        tryAgain.textContent='Try Again';
        battleGround.insertBefore(tryAgain, emojis);
        tryAgain.addEventListener('click', ()=>reset(tryAgain));
    }
    
}

function reset(tryAgain){
    playerScore=0;
    compScore=0;
    player.textContent=`Player : ${playerScore}`;
    comp.textContent=`Comp : ${compScore}`;
    playerEmoji.textContent='❔';
    compEmoji.textContent='❔';
    tryAgain.remove();
    checkTryAgainBtn=1;
}