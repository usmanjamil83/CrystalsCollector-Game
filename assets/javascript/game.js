var wins = 0;
var losses = 0;
var counter = 0;

var targetNumber = Math.floor(Math.random() * 101) + 19;
console.log(targetNumber);

$("#random-number").text(targetNumber);

var crystalOne = Math.floor(Math.random() * 12) + 1;
console.log(crystalOne);

var crystalTwo = Math.floor(Math.random() * 12) + 1;
console.log(crystalTwo);

var crystalThree = Math.floor(Math.random() * 12) + 1;
console.log(crystalThree);

var crystalFour = Math.floor(Math.random() * 12) + 1;
console.log(crystalFour);

$("#wins").html(wins);
$("#losses").text(losses);

function reset() {
	targetNumber = Math.floor(Math.random() * 101) + 19;
	console.log(targetNumber);

	$("#random-number").text(targetNumber);

	crystalOne = Math.floor(Math.random() * 12) + 1;
	console.log(crystalOne);

	crystalTwo = Math.floor(Math.random() * 12) + 1;
	console.log(crystalTwo);

	crystalThree = Math.floor(Math.random() * 12) + 1;
	console.log(crystalThree);

	crystalFour = Math.floor(Math.random() * 12) + 1;
	console.log(crystalFour);

	counter = 0;

	$("#finalscore").text(counter);
}
function updateWins() {
	wins++;
	$("#wins").text(wins);
	reset();
}
function updateLosses() {
	losses++;
	$("#losses").text(losses);
	reset();
}

{
	$(".crystal-image1").on("click", function() {
		counter += crystalOne;
		$("#finalscore").text(counter);
		if (counter === targetNumber) {
			alert("You win!");
			updateWins();
		}
		else if (counter > targetNumber) {
			alert("you lost");
			updateLosses();
		}				
	});
	$(".crystal-image2").on("click", function() {
		counter += crystalTwo;
		$("#finalscore").text(counter);
		if (counter === targetNumber) {
			alert("You win!");
			updateWins();
		}
		else if (counter > targetNumber) {
			alert("you lost");
			updateLosses();
		}				
	});
	$(".crystal-image3").on("click", function() {
		counter += crystalThree;
		$("#finalscore").text(counter);
		if (counter === targetNumber) {
			alert("You win!");
			updateWins();
		}
		else if (counter > targetNumber) {
			alert("you lost");
			updateLosses();
		}				
	});
	$(".crystal-image4").on("click", function() {
		counter += crystalFour;
		$("#finalscore").text(counter);
		if (counter === targetNumber) {
			alert("You win!");
			updateWins();
		}
		else if (counter > targetNumber) {
			alert("you lost");
			updateLosses();
		}				
	});
}