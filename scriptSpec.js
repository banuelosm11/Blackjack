
  describe("New deck", function(){
    it("length should be 52", function(){
      var deck = new Deck();
      expect(deck.deckOfCards.length).toBe(52);
    });
  });

 describe("Dealing one card", function(){
    it("should not be null", function(){
      var deck = new Deck();
      expect(deck.deal()).not.toBeNull();
    });
  });

describe("New Player name", function(){
    it("should be Aurora", function(){
      var player1 = new Player("Aurora");
        expect(player1.name).toBe("Aurora");
    });
  });

describe("New Player balance", function(){
    it("should be 0", function(){
      var player1 = new Player("Aurora");
        expect(player1.balance).toBe(0);
    });
  });

describe("Check that add balance works", function(){
    it("should be 100", function(){
      var player1 = new Player("Aurora");
        player1.addToBalance(100);
    expect(player1.balance).toBe(100);
    });
  });

describe("Check that bet deducted from balance", function(){
    it("should be 75", function(){
      var player1 = new Player("Aurora");
        player1.addToBalance(100);
        player1.bet(25);
    expect(player1.balance).toBe(75);
    });
  });

describe("New Dealer name", function(){
    it("should be Dealer", function(){
      var dealer = new Dealer();
    expect(dealer.name).toBe("Dealer");
    });
  });

describe("New Dealer balance", function(){
    it("should be 100000", function(){
      var dealer = new Dealer();
        expect(dealer.balance).toBe(100000);
    });
  });

describe("Check that add balance works", function(){
    it("should be 100100", function(){
      var dealer = new Dealer();
        dealer.addToBalance(100);
    expect(dealer.balance).toBe(100100);
    });
  });

describe("Check that bet deducted from balance", function(){
    it("should be 100075", function(){
      var dealer = new Dealer();
        dealer.addToBalance(100);
        dealer.bet(25);
        expect(dealer.balance).toBe(100075);
    });
  });

describe("Check new hand", function(){
    it("should be empty", function(){
      var hand = new Hand();
     expect(hand.currentHand).toEqual([]);
    });
  });

describe("Check new hand when card added", function(){
    it("should be A of Diamonds", function(){
      var hand = new Hand();
        hand.addCard("A of Diamonds");
     expect(hand.currentHand).toEqual(["A of Diamonds"]);
    });
  });

describe("Check that clear all cards works", function(){
    it("should be []", function(){
      var hand = new Hand();
        hand.addCard("A of Diamonds");
        hand.clearAllCards();
     expect(hand.currentHand).toEqual([]);
    });
  });

describe("Check that evaluateHand works", function(){
    it("should be 15", function(){
      var hand = new Hand();
        hand.addCard("A of Diamonds");
        hand.addCard("J of Diamonds");
        hand.addCard("4 of Diamonds");
        expect(hand.evaluateHand()).toEqual(15);
    });
  });

describe("Check that dealer matches bet of 25", function(){
    it("Total bet should be 50", function(){
        expect(takeBets(25)).toEqual(50);
    });
  });

describe("Check initial deal worked for dealerhand and playerhand", function(){
    it("should be 2 cards", function(){
        dealerhand.clearAllCards();
        player1hand.clearAllCards();
      initialDeal();
     expect(dealerhand.currentHand.length).toBe(2);
    expect(player1hand.currentHand.length).toBe(2);
    });
  });

describe("Check hit works", function(){
    it("should be 1 card each for dealer and player", function(){
        dealerhand.clearAllCards();
        player1hand.clearAllCards();
        hit();
        expect(dealerhand.currentHand.length).toBe(1);
        expect(player1hand.currentHand.length).toBe(1);
    });
  });

describe("Check stand works", function(){
    it("should be 1 card for dealer and 0 for player", function(){
        dealerhand.clearAllCards();
        player1hand.clearAllCards();
        stand();
        expect(dealerhand.currentHand.length).toBe(1);
        expect(player1hand.currentHand.length).toBe(0);
    });
  });

describe("Check pickWinner works", function(){
    it("should be player wins", function(){
        dealerhand.clearAllCards();
        player1hand.clearAllCards();
        initialDeal();
        stand();
        expect(pickWinner()).toBe("Player wins");
    });
  });

describe("Check pickWinnerInitial works", function(){
    it("should be player wins", function(){
        dealerhand.clearAllCards();
        player1hand.clearAllCards();
        initialDeal();
        expect(pickWinnerInitial()).toBe(false);
    });
  });

///rework pick winners tests