
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput(){
    return new Promise((resolve) => {
        rl.question("Choose integer corresponding to your choice:\nRock: 1\nPaper: 2\nScissor: 3\nExit: 0\nEnter Choice: ", (answer) => {
            const choice = parseInt(answer.trim(), 10);
            if(choice == 0 || choice == 1 || choice == 2 || choice == 3){
                resolve(choice);
            } else {
                console.log("Invalid Input.");
                resolve(getUserInput());
            }
        });
    });
}

function getInputFromComputer(){
    return Math.floor(Math.random() * (3-0+1)) + 0;
}

async function play(){

    let p_score = 0, c_score = 0;

    while(true){
        const userInput = await getUserInput();
        
        if(userInput == 0){
            console.log("Exiting the Game");
            break;
        } else{
            const cInput = getInputFromComputer();
            if(cInput == userInput){
                console.log("------Tie------");
            } else if((cInput == 1 && userInput == 3) 
                || (cInput == 2 && userInput == 1) 
                || (cInput == 3 && userInput == 2)){
                console.log("------Computer Won this game------");
                c_score++;
            } else {
                console.log("------User Won this game------");
                p_score++;
            }
        }

        if(p_score == 5){
            console.log("------User Won the series of 5 Game!------");
            break;
        } else if(c_score == 5){
            console.log("------Computer Won the series of 5 Game!------");
            break;
        }

    }

    rl.close();
    return;
}

play();





