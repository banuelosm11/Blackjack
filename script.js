" use strict ";

var display = document.getElementById("display");

class Player{
    
     constructor(name){
        this.name = name;
        this.balance = 0; 
    }

    addToBalance(amountToAddToBal){
        this.balance += amountToAddToBal;
    }
    
    bet(amountToBet){
        this.balance -= amountToBet;
    }
}

class Dealer extends Player{
    constructor(){
        super("Dealer");
        this.balance = 100000;
    }
}

class Deck{
    
    constructor(){
    this.deckOfCards = ["A of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts", "J of Hearts", "Q of Hearts", "K of Hearts","A of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "J of Clubs", "Q of Clubs", "K of Clubs","A of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "J of Diamonds", "Q of Diamonds", "K of Diamonds","A of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades", "J of Spades", "Q of Spades", "K of Spades"];
    }

    shuffle(){
    for (var i = 0; i < 52; i++) {
        var k = Math.floor(Math.random() * this.deckOfCards.length);
        var temp = this.deckOfCards[k];
        this.deckOfCards[k] = this.deckOfCards[this.deckOfCards.length-1-k];
        this.deckOfCards[this.deckOfCards.length-1-k] = temp;
        } 
    }
    
    deal(){
        var k = Math.floor(Math.random() * this.deckOfCards.length);
        var cardToBeDealt = this.deckOfCards[k];
        this.deckOfCards.splice(k, 1);
        return cardToBeDealt;
    }
}

class Hand{
    
    constructor(){
        this.currentHand = [];
    }

    addCard(cardDealt){
        this.currentHand.push(cardDealt);
    }

    clearAllCards(){
        this.currentHand = [];
    }
    
    evaluateHand(){
        
        var val = 0;
        for(var i = 0; i<this.currentHand.length; i++){
            if(this.currentHand[i].charAt(0) == "A"){
                val += 1;
            }
            else if(this.currentHand[i].charAt(0) == "K"||this.currentHand[i].charAt(0) == "Q"||this.currentHand[i].charAt(0) == "J"||this.currentHand[i].charAt(0) == "1" ){
                    val += 10;
            }
            else{
                val += parseInt(this.currentHand[i].charAt(0),10);
                }
        }
        return val;
    }
}  


var deck = new Deck();
var player1hand = new Hand();
var dealerhand = new Hand();
var dealer = new Dealer();
var player1 = new Player("Aurora");
this.player1.addToBalance(100);



function takeBets(betAsk){  
        this.player1.bet(betAsk);
        this.dealer.bet(betAsk);
        return betAsk*2;
    }

function initialDeal(){
        this.deck.shuffle();
        for( var i =0; i<2; i++){
        this.player1hand.addCard(this.deck.deal());
        this.dealerhand.addCard(this.deck.deal());
        } 
     return "Player: " + this.player1hand.currentHand +"<br>"+"Dealer: " + this.dealerhand.currentHand;
    }

 function hit(){
        this.player1hand.addCard(this.deck.deal());
        if(this.dealerhand.evaluateHand()< 18){
            this.dealerhand.addCard(this.deck.deal());
        }
        return "Player: " + this.player1hand.currentHand +"<br>"+"Dealer: " + this.dealerhand.currentHand;
    }

 function stand(){
        if(this.dealerhand.evaluateHand()<18){
        this.dealerhand.addCard(this.deck.deal());
        }
        return "Player: " + this.player1hand.currentHand +"<br>"+"Dealer: " + this.dealerhand.currentHand;
    }

function pickWinner(){
        if (this.player1hand.evaluateHand()==21 || this.dealerhand.evaluateHand()>21 ){
            this.player1hand.clearAllCards();
            this.dealerhand.clearAllCards();
            return "Player wins";
        }else if(this.dealerhand.evaluateHand()==21 || this.player1hand.evaluateHand()>21){
            this.player1hand.clearAllCards();
            this.dealerhand.clearAllCards();
            return "Dealer wins";
        }else if(this.dealerhand.evaluateHand() > this.player1hand.evaluateHand()){
            this.player1hand.clearAllCards();
            this.dealerhand.clearAllCards();
            return "Dealer wins";
        }else if(this.dealerhand.evaluateHand() == this.player1hand.evaluateHand() || (this.dealerhand.evaluateHand()>21 && this.player1hand.evaluateHand()>21) || (this.dealerhand.evaluateHand()==21 && this.player1hand.evaluateHand()==21)){
            this.player1hand.clearAllCards();
            this.dealerhand.clearAllCards();
            return "Tie";
        }else{
            this.player1hand.clearAllCards();
            this.dealerhand.clearAllCards();
            return "Player wins";    
        }
    }

function pickWinnerInitial(){
        if (this.player1hand.evaluateHand()==21 || (this.dealerhand.evaluateHand()>21 && this.player1hand.evaluateHand()<21) ){
            this.player1hand.clearAllCards();
            this.dealerhand.clearAllCards();
            return "Player wins";
        }else if(this.dealerhand.evaluateHand()==21 || (this.player1hand.evaluateHand()>21 && this.dealerhand.evaluateHand()<21)){
            this.player1hand.clearAllCards();
            this.dealerhand.clearAllCards();
            return "Dealer wins";
        }else{
            return false;
        }
    }

function play(){
    
        var askForBetAmount= prompt("How much would you like to bet?");
        while(isNaN(askForBetAmount) == true){
            askForBetAmount= prompt("That is not a valid number. How much would you like to bet?")
        }
        var totalBets = takeBets(askForBetAmount);
        
        display.innerHTML=initialDeal();
        console.log(display.innerHTML);
        //setTimeout(function(){ display.innerHTML;}, 2000);
        var winner = pickWinnerInitial();
        if(winner != false){display.innerHTML+=("<br>"+winner);}
        if(winner == "Dealer wins"){
            this.dealer.addToBalance(totalBets);
            console.log(totalBets+" added to Dealer balance");
        }else if(winner == "Player wins"){
            this.player1.addToBalance(totalBets);
            console.log(totalBets+" added to Player balance");
        }
        
        while(winner == false){
            var hitOrStand = prompt("hit or stand?");
            if(hitOrStand.toLocaleLowerCase() == "hit"){
                console.log(hit());
                winner = pickWinnerInitial();
                if(winner != false){console.log(winner);}
                if(winner == "Dealer wins"){
                    this.dealer.addToBalance(totalBets);
                    console.log(totalBets+" added to Dealer balance");
                    break;
                }else if(winner == "Player wins"){
                    this.player1.addToBalance(totalBets);
                    console.log(totalBets+" added to Player balance");
                    break;
                }
            }else{
                console.log(stand());
                winner = pickWinner();
                console.log(winner);
                if(winner == "Dealer wins"){
                    this.dealer.addToBalance(totalBets);
                    console.log(totalBets+" added to Dealer balance");
                }else if(winner == "Player wins"){
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







