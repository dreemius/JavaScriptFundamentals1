/*Task one*/

var maxObj = (data.length-1),
	currentObj = 0,
	count = 0;

$("#addObj").click(function(){
	var mainDiv = document.getElementById('test');

	var secondDiv = document.createElement('div');
		secondDiv.className = "col-sm-3 col-xs-6";
		mainDiv.appendChild(secondDiv);
		
	var imgURL = document.createElement('img');
		imgURL.src = data[currentObj].url;
		imgURL.className = 'img-thumbnail';
		secondDiv.appendChild(imgURL);
			
	var thirdDiv = document.createElement('div');
		thirdDiv.className = "info-wrapper";
		secondDiv.appendChild(thirdDiv);
	 
	var lastDiv1 = document.createElement('div');
		lastDiv1.className = "text-muted";
		lastDiv1.innerHTML = data[currentObj].id + ' ' + data[currentObj].name;
		thirdDiv.appendChild(lastDiv1);
		
	var lastDiv2 = document.createElement('div');
		lastDiv2.className = "text-muted";
		lastDiv2.innerHTML = data[currentObj].description;
		thirdDiv.appendChild(lastDiv2);
		
	var lastDiv3 = document.createElement('div');
		lastDiv3.className = "text-muted";
		lastDiv3.innerHTML = newDate(data[currentObj].date);
		thirdDiv.appendChild(lastDiv3);
		
	var delDiv = document.createElement('div'),
		delLink = document.createElement('a');
		delDiv.className = "text-muted";
		delLink.href = "#";
		delLink.innerHTML = "Удалить";
		thirdDiv.appendChild(delDiv);
		delDiv.appendChild(delLink);
		
		
	currentObj == maxObj ? currentObj = 0 : currentObj++;
	count++;
	$("#count").text(count);
	
	
});

var newDate = function(date){
		var tmpDate = new Date(date);
		return tmpDate.getFullYear() + "/" +
			   tmpDate.getMonth() + "/" +
			   tmpDate.getDate() + " " +
			   tmpDate.getHours() + ":" +
			   tmpDate.getMinutes();
};

/*--------------*/

$("#test").click(function(){
		document.getElementById('test').removeChild(event.target.parentNode.parentNode.parentNode);
		count--;
		$("#count").text(count);
	});

	
	
	
/*Task two*/

$("#exampleInputName2").keyup(function(){
	$("#targetInput").val($("#exampleInputName2").val());
});

$("#clean").click(function(){
	$("#exampleInputName2").val("");
	$("#targetInput").val("");
});