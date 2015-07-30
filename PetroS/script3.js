"use strict";

var first;
var second;
var total;
var z; 




// Пример исппользования do - while
do {
	first = second = total = z = 0;
	document.getElementById("result").innerHTML += "<p>";
	document.getElementById("result").innerHTML += "<br/> Starting game <br/>" 
	do {
		z = parseInt(window.prompt("Enter quantity of game round( Bigger than 0 and less 50)"));	
		if (isNaN(z)) { z = 0}
	} while (z > 50 || z < 1)

	for (var i = 0; i < z; i++){
		first = Math.floor((Math.random() * 6) + 1); 
		second = Math.floor((Math.random() * 6) + 1); 
		total += first + second;
		if  ( (first == second) && 0) {
		document.getElementById("result").innerHTML += "Double zero <br/>";}
			else {
			if  ( (first == second) && 6) {
			document.getElementById("result").innerHTML += "Double six <br/>";}
					else {
						if   (first == second) 
							document.getElementById("result").innerHTML += "Twice " + first + "<br/>"; else 
					document.getElementById("result").innerHTML += "First is:  " + first + " Second is: " + second + "<br/>"; }
			}   //
	} 
	document.getElementById("result").innerHTML += "Your result is : " + total + "<br/>";
	(total<100)?document.getElementById("result").innerHTML += "Your result less then 100. Sorry you lose ":document.getElementById("result").innerHTML += "Your result bigger than 100. You Win !!!! ";
	document.getElementById("result").innerHTML += "</p>";
} while (window.confirm("Once more? "));