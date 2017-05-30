var inputFromUser;
/*
var count = 0; 

function onClickEvent(){
     if(count ==0){
         startPlay();
         count++;
     }else{
         inputFromUser = document.getElementById("input").value;
         count++;
     }
}*/
    
function welcomePlayer(){
    display.innerHTML = "Welcome to Aurora's Casino.<br> What is your name? <br> Enter your response in the box below and press Submit";
}

function startPlay(){
    inputFromUser = document.getElementById("input").value;
    
    var player1 = new Player(inputFromUser);
    
    display.innerHTML = "Hello, " +inputFromUser + ". Please add money to your account to play. <br> Enter the amount in the reponse box below and press Submit<br>";
  
    var amount = prompt("Please add money to your account to play. Amount to add: ");
    
    player1.addToBalance(amount);
    
    display.innerHTML += "Great! Your balance is: "+player1.balance +"<br>";
    
    var wantToPlay = prompt("Would you like to play blackjack? Yes or No");
    
    var blackjack = new Blackjack();
    
    while(wantToPlay == "yes"){
        blackjack.play();
        wantToPlay = prompt("Would you like to play again?")
    }
    
    display.innerHTML += "Thanks for playing. Bye";
    
}
           
    
    play(){
        var askForBetAmount= prompt("How much would you like to bet?");
        var totalBets = takeBets(askForBetAmount);
        
        initialDeal();
        pickWinnerInitial();
        if(pickWinnerInitial() == "Dealer wins"){
            this.dealer.addToBalance(totalBets);
            console.log(totalBets+" added to Dealer balance");
        }else if(pickWinnerInitial() == "Player wins"){
            this.player1.addToBalance(totalBets);
            console.log(totalBets+" added to Player balance");
        }else{
            continue;
        }
        
        while(pickWinnerInitial() == false){
            var hitOrStand = prompt("hit or stand?");
            if(hitOrStand == "hit"){
                hit();
                pickWinnerInitial();
                if(pickWinnerInitial() == "Dealer wins"){
                    this.dealer.addToBalance(totalBets);
                    console.log(totalBets+" added to Dealer balance");
                }else if(pickWinnerInitial() == "Player wins"){
                    this.player1.addToBalance(totalBets);
                    console.log(totalBets+" added to Player balance");
                }else{
                    continue;
                }
            }else{
                stand();
                pickWinnerFinal();
                if(pickWinner() == "Dealer wins"){
                    this.dealer.addToBalance(totalBets);
                    console.log(totalBets+" added to Dealer balance");
                }else if(pickWinner() == "Player wins"){
                    this.player1.addToBalance(totalBets);
                    console.log(totalBets+" added to Player balance");
                }else{
                    this.player1.addToBalance(totalBets/2);
                    this.dealer.addToBalance(totalBets/2);
                    console.log("Tie - original bet added back to player and dealer balance");
                }
                break;
            }
        }
        
    }
    

    
    
    
   


