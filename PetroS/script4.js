"use strict";

var first;
var second;
var total;
var z; 

function print_div(div_text){
	document.getElementById("result").innerHTML += div_text;
}

function double_dice(first, second){
	if   (first == second) {
		print_div(" Double " + first + "<br/>");
		return true;
	} else {return false;}
}




do {
	first = second = total = z = 0;
	print_div("<p>");
	print_div("<br/> Starting game <br/>"); 

	do {
		z = parseInt(window.prompt("Enter quantity of game round( Bigger than 0 and less 50)"));	
		if (isNaN(z)) { z = 0}
	} while (z > 50 || z < 1)

		for (var i = 0; i < z; i++){
		first = Math.floor((Math.random() * 6) + 1); 
		second = Math.floor((Math.random() * 6) + 1); 
		total += first + second;
		if  ( double_dice(first,second)) {
		} else print_div("First is - " + first + " Second is - " + second + "<br/>");

			
	} 
	print_div("Your result is : " + total + "<br/>");
	(total<100)?print_div("Your result less then 100. Sorry you lose "):print_div("Your result bigger than 100. You Win !!!! ");
} while (window.confirm("Once more? "));