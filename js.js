

let userPoints = 0;
let compPoints = 0;
let response = "";
function gameplay(){
    /*random rock,paper or scissors*/
    let rps = ["rock", "paper", "scissors"];
    let comp = rps[Math.floor(Math.random() * (3 - 0) -0)];
    let userSelection = prompt("Type rock, paper, or scissors.");
    userSelection = userSelection.toLowerCase();
    if (userSelection == comp){
         return "Tie";
    }else if ((userSelection == "rock" && comp == "scissors") || (userSelection == "scissors" && comp == "paper") || (userSelection == "paper" && comp == "rock")){
        userPoints++;
        return "You Win! Computer chose " + comp;


    }else if ((userSelection == "rock" && comp == "paper") || (userSelection == "scissors" && comp == "rock") || (userSelection == "paper" && comp == "scissors")){
        compPoints++;
        return "You lost :(. The computer chose " + comp;


    }

}
function game(){
    console.log(gameplay());
    console.log(gameplay());
    console.log(gameplay());
    console.log(gameplay());
    console.log(gameplay());
    if (userPoints == compPoints){
        console.log('Overall was a Tie!')
    }else if (userPoints > compPoints){
        console.log("You won by " + (userPoints-compPoints) + " points!")
    }else if (userPoints < compPoints){
        console.log("You lost by "+ (compPoints-userPoints) + " points.")
    }
}
game();
