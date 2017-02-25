var wins = 0;
var losses = 0;
var counter = 0;

var targetNumber = Math.floor(Math.random() * 101) + 19;
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

function reset()
{
	targetNumber = Math.floor(Math.random() * 101) + 19;
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
function alertResult()
{
	if (counter == targetNumber)
	{
		wins++;
		$("#wins").text(wins);
		$("#yay").html("you win");
		reset();
	}
	else if (counter > targetNumber)
	{
		losses++;
		$("#losses").text(losses);
		$("#yay").html("you lose");
		reset();
	}
}
$(".crystal-image1").on("click", function() {
	$("#finalscore").text(counter += crystalOne);
	alertResult();
});
$(".crystal-image2").on("click", function() {
	$("#finalscore").text(counter += crystalTwo);
	alertResult();
});
$(".crystal-image3").on("click", function() {
	$("#finalscore").text(counter += crystalThree);
	alertResult();
});
$(".crystal-image4").on("click", function() {
	$("#finalscore").text(counter += crystalFour);
	alertResult();
});