var data = [{
	url: "http://desktopwallpapers.org.ua/mini/201507/40069.jpg",
	name: "МАШИНКА",
	id : 1,
	description : " be conveyed to users of assistive technologies – such as",
	date : 1422153200637
},{
	url: "http://desktopwallpapers.org.ua/mini/201507/40068.jpg",
	name: "ДРУГАЯ МАШИНКА",
	id : 2,
	description : "sing color to add meaning to a button",
	date : 1421153200637
},{
	url: "http://desktopwallpapers.org.ua/mini/201507/40067.jpg",
	name: "НАЗВАНИЕ",
	id : 3,
	description : " be conveyed to users of assistive technologies",
	date : 1426153200637
},{
	url: "http://desktopwallpapers.org.ua/mini/201507/40066.jpg",
	name: "ОПИСАНИЕ",
	id : 4,
	description : "ssistive technologies – such as screen readers. Ensure",
	date : 1428153200637
},{
	url: "http://desktopwallpapers.org.ua/mini/201507/40065.jpg",
	name: "ИМЯ МАШИНЫ",
	id : 5,
	description : "color to add meaning to a button only provides",
	date : 1402153200637
},{
	url: "http://desktopwallpapers.org.ua/mini/201507/40064.jpg",
	name: "МЕРСЕДЕС",
	id : 6,
	description : "om the content itself (the visible text of the button)",
	date : 1442153200637
},{
	url: "http://desktopwallpapers.org.ua/mini/201507/40063.jpg",
	name: "БМВ",
	id : 7,
	description : "r is either obvious from the content itself",
	date : 1482153200637
},{
	url: "http://desktopwallpapers.org.ua/mini/201507/40062.jpg",
	name: "ЛАДА КАЛИНА",
	id : 8,
	description : "included through alternative means, such as additional text hidden with the",
	date : 1442153200637
},{
	url: "http://desktopwallpapers.org.ua/mini/201507/40061.jpg",
	name: "ДЖИП",
	id : 9,
	description : " meaning to a button only provides a visual",
	date : 1322153200637
},{
	url: "http://desktopwallpapers.org.ua/mini/201507/40060.jpg",
	name: "ДАЧА ЛОГАН",
	id : 10,
	description : "uded through alternative means, such as additional",
	date : 1322159200637
}]

var outletData = (data.length-1);
    startData  =  0;
    count = 0;
function myDateFormat(date){	
	var newDate =new Date(date);
	
	var d = newDate.getDate();
	var m = newDate.getMonth()+1;
	var y = newDate.getFullYear();
	
	return (y+ "/" + m + "/" + d );	
};
  
  function descriptionSlice(description){
  return description.slice(0,15);
};
function nameToLowerCase(name){
  return name.replace(name.substr(1),(name.substr(1)).toLowerCase());
};
 
var newDate = myDateFormat(data[startData].date); 
var newStr  = descriptionSlice(data[startData].description);
var newName = nameToLowerCase(data[startData].name);



var myClick = document.querySelector('#battonClick'); 
myClick.addEventListener ("click", myDemo);

/*
var createCustomElement = function (config) {		
	var el 			= document.createElement(config.type);
	el.className 	= config.class;
	if (config.src) {el.src = config.src};
	if(config.innerHTML){el.innerHTML = config.innerHTML};
	if (config.href){el.href = config.href};
	config.parentElement.appendChild(el);
	return el;
}	
*/
	



var updateCounts = function(){
	startData  == outletData ? 0 : startData++;
	count++;
	$("#count").text(count);
}



function myDemo(){
var myDiv = document.getElementById('test');


var firstData = document.createElement('div');
    firstData.className = "col-sm-3 col-xs-12";
	myDiv.appendChild(firstData);
     
var secondData = document.createElement('img');
    secondData.src = data[startData].url;
    secondData.className= "img-thumbnail";
    firstData.appendChild(secondData);
	
var thirdData = document.createElement('div');
    thirdData.className = "Inform-wrapper";
    firstData.appendChild(thirdData);
	
var nameData = document.createElement('div');
    nameData.className = "text-div";
    nameData.innerHTML = data[startData].id  + ' ' + newName
    thirdData.appendChild(nameData);

var descriptionData = document.createElement('div');
    descriptionData.className = "text-div";
    descriptionData.innerHTML = newStr;
    thirdData.appendChild(descriptionData);
   
var dateData = document.createElement('div');
    dateData.id = "date"
    dateData.className = "text-div";
    dateData.innerHTML = newDate;
    thirdData.appendChild(dateData);
	
var clearData = document.createElement('div');
    clearLink= document.createElement('a');
	clearData.className = "text-muted";
	clearLink.href = "#";
	clearLink.innerHTML = "Удалить";
	thirdData.appendChild(clearData);
	clearData.appendChild(clearLink);
		
	updateCounts();

 }

 var removeData =document.querySelector('#test'); 
removeData.addEventListener ("click", removeChildData);

function (){
	document.getElementById('test').removeChild(event.target.parentNode.parentNode.parentNode);
		count--;
		$("#count").text(count);
}


var text = ""
var input = document.querySelector('#exampleInputName2');
var textArea  = document.querySelector('.row textarea');
var deleteBatton = document.querySelector('.col-xs-6 button');

input.addEventListener ("keyup" , backupTextArea);

deleteBatton.addEventListener("click", deleteTheData);

function backupTextArea (){
	 text = input.value;
    textArea.value = text;
}

function deleteTheData() {
    input.value ="";
    textArea.value = "";
}
