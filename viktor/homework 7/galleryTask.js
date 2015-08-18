/*Task one*/

var maxCount = (data.length-1),
	currentCount = 0,
	count = 0;


var createCustomElement = function (config) {		
	var el 			= document.createElement(config.type);
	el.className 	= config.class;
	if (config.src) {el.src = config.src};
	config.parentElement.appendChild(el);
	return el;
}	

var updateCounts = function () {
	currentCount == maxCount ? 0 : currentCount++;
	count++;
	$("#count").text(count);	
}

var newDate = function(date){
		var tmpDate = new Date(date);
		return tmpDate.getFullYear() + "/" +
			   tmpDate.getMonth() + "/" +
			   tmpDate.getDate() + " " +
			   tmpDate.getHours() + ":" +
			   tmpDate.getMinutes();
};
	
var processNewElement = function(){
	var mainDiv = document.getElementById('test');

	// var secondDiv = document.createElement('div');
		// secondDiv.className = "col-sm-3 col-xs-6";
		// mainDiv.appendChild(secondDiv);
		
		var secondDiv = createCustomElement ({
			type 			: 'div',
			class			: 'col-sm-3 col-xs-6',
			parentElement 	: mainDiv
		})
		
	// var imgURL = document.createElement('img');
		// imgURL.src = data[currentCount].url;
		// imgURL.className = 'img-thumbnail';
		// secondDiv.appendChild(imgURL);
		
		
		var imgURL = createCustomElement ({
			type 			: 'img',
			class			: 'img-thumbnail',
			parentElement 	: secondDiv,
			src				: data[currentCount].url
		})
			
	var thirdDiv = document.createElement('div');
		thirdDiv.className = "info-wrapper";
		secondDiv.appendChild(thirdDiv);
	 
	var lastDiv1 = document.createElement('div');
		lastDiv1.className = "text-muted";
		lastDiv1.innerHTML = data[currentCount].id + ' ' + data[currentCount].name;
		thirdDiv.appendChild(lastDiv1);
		
	var lastDiv2 = document.createElement('div');
		lastDiv2.className = "text-muted";
		lastDiv2.innerHTML = data[currentCount].description;
		thirdDiv.appendChild(lastDiv2);
		
	var lastDiv3 = document.createElement('div');
		lastDiv3.className = "text-muted";
		lastDiv3.innerHTML = newDate(data[currentCount].date);
		thirdDiv.appendChild(lastDiv3);
		
	var delDiv = document.createElement('div'),
		delLink = document.createElement('a');
		delDiv.className = "text-muted";
		delLink.href = "#";
		delLink.innerHTML = "Удалить";
		thirdDiv.appendChild(delDiv);
		delDiv.appendChild(delLink);
		
	updateCounts();	

	
}	
	
	
$("#addObj").click(processNewElement);


$("#test").click(function(){
		document.getElementById('test').removeChild(event.target.parentNode.parentNode.parentNode);
		count--;
		$("#count").text(count);
	});
	
	// сделать все через вызов функции createCustomElement
	// вынести удаление в функцию и передать туда первый аргумент event
	// поменять jquery подход на нативный
	// getElementById -> querySelector

	














	
	
/*Task two*/

$("#exampleInputName2").keyup(function(){
	$("#targetInput").val($("#exampleInputName2").val());
});

$("#clean").click(function(){
	$("#exampleInputName2").val("");
	$("#targetInput").val("");
});