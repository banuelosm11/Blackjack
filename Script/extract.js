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

function setUserInput(){
    inputFromUser = document.getElementById("input").value;
}
           
    
        
    
    

    
    
    
   


