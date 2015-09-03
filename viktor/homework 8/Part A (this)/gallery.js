
var link = document.querySelector('#link');
link.addEventListener ("mousedown", function(){console.log("mousedown")})
link.addEventListener ("mouseup", function(){console.log("mouseup")})
link.addEventListener ("click", function(){console.log("click")})
link.addEventListener ("keyup", function(){console.log("keyup")})


//---------

var eventLog = "";
var link2 = document.querySelector('#link2');
var input = document.querySelector('#input');
link2.addEventListener ("click", function(event){
	
	eventLog += " click start ";
	input.focus();
	eventLog += " click end ";
	console.log(eventLog);
	eventLog = "";
	
	
	console.log("type is " + event.type);
	console.dir(event);
})	
input.addEventListener ("focus", function(){
	eventLog += " focus ";
})		

//---------

var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');

one.addEventListener ("click", msg);
two.addEventListener ("click", msg);
//two.addEventListener ("mousedown", msg);
three.addEventListener ("click", msg);

function msg (event) {
	//console.log("type: "+event.type + "    " + event.currentTarget.id);
	console.log("Target: " + event.target.id);
	console.log("Current target: " + event.currentTarget.id);
	console.log("---------- ");
}

//---------

var oneX = document.querySelector('#oneX');
oneX.addEventListener ("click", msg2);


function msg2 (event) {
	console.log("Target: " + event.target.id);
	console.log("Current target: " + event.currentTarget.id);
}



