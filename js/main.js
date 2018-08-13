

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];



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
    console.log("user flipped " + cards[cardID].rank);
    cardsInPlay.push(cards[cardID].rank);
    console.log(cards[cardID].cardImage);
    console.log(cards[cardID].suit);
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




