

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

var cardOne = cards[0];

var cardTwo = cards[2];

var cardThree = cards[1];

var cardFour = cards[3];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);

cardsInPlay.push(cardThree);

cardsInPlay.push(cardFour);

console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);
console.log("user flipped " + cardThree);
console.log("user flipped " + cardFour);


if (cardsInPlay.length === 4 && (cardsInPlay[0] === cardsInPlay[2])) {
	alert("You found a match!");
} else {
	console.log("GUESS AGAIN")
}







