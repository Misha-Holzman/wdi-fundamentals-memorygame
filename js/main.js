

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
};



var flipCard = function(cardID) {
    checkForMatch();
    console.log("user flipped " + cards[cardID]);
    cardsInPlay.push(cards[cardID]);
};

flipCard(0);
flipCard(2);




    



/* 	if (cardsInPlay.length === 4 && (cardsInPlay[0] === cardsInPlay[2])) {
	    alert("You found a match!");
    } else {
	console.log("Sorry, try again.");
    }

    (I am unclear if this code should be deleted or not)
*/




