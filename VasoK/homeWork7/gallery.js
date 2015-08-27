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

var resultContainer = document.querySelector('#result'),
addNewPicture = document.querySelector('#addNewPicture'),
countPictures = document.querySelector('#count');
var dataLength = (data.length-1),
	currentCount = 0,
	count = 0;
	
function descriptionSlice(description){
  return description.slice(0,14);
}
function nameToLowerCase(name){
  return name.replace(name.substr(1),(name.substr(1)).toLowerCase());
}
function addZero(i) {
	return (i < 10) ? ("0" + i) : i;
}
function changeDateFormat(date){	
	var newDate =new Date(date);
	
	var new_date = addZero(newDate.getDate());
	var new_month = addZero(newDate.getMonth()+1);
	var new_year = newDate.getFullYear();
	var new_hours = addZero(newDate.getHours());
	var new_minutes = addZero(newDate.getMinutes());
	
	return (new_year + "/" + new_month + "/" + new_date + " " + new_hours+":"+new_minutes);	
}
	var createCustomElement = function (config) {		
	var el 			= document.createElement(config.type);
	el.className 	= config.class;
	if (config.src) {el.src = config.src};
	if (config.insertText) {el.innerHTML = config.insertText};
	config.parentElement.appendChild(el);
	return el;
}	

var updateCounts = function () {
	currentCount == dataLength ? currentCount=0 : currentCount++;
	count++;
	countPictures.innerHTML=count;	
}
	
var processNewElement = function(){
	var mainDiv = document.querySelector('#result');
			
		var secondDiv = createCustomElement ({
			type 			: 'div',
			class			: 'col-sm-3 col-xs-6',
			parentElement 	: mainDiv
		})

		var imgURL = createCustomElement ({
			type 			: 'img',
			class			: 'img-thumbnail',
			parentElement 	: secondDiv,
			src				: data[currentCount].url
		})
				
		var thirdDiv = createCustomElement ({
			type 			: 'div',
			class			: 'info-wrapper',
			parentElement 	: secondDiv
		})
		
	var lastDiv1 = createCustomElement ({
			type 			: 'div',
			class			: 'text-muted',
			parentElement 	: thirdDiv,
			insertText		: data[currentCount].id + ' ' + nameToLowerCase(data[currentCount].name)
		})
		
	var lastDiv2 = createCustomElement ({
			type 			: 'div',
			class			: 'text-muted',
			parentElement 	: thirdDiv,
			insertText		: descriptionSlice(data[currentCount].description)
		})
		
	var lastDiv3 = createCustomElement ({
			type 			: 'div',
			class			: 'text-muted',
			parentElement 	: thirdDiv,
			insertText		: changeDateFormat(data[currentCount].date)
		})
		
	var delDiv = document.createElement('div'),
		delLink = document.createElement('a');
		delDiv.className = "text-muted";
		delLink.href = "#";
		delLink.innerHTML = "Удалить";
		thirdDiv.appendChild(delDiv);
		delDiv.appendChild(delLink);
		delDiv.addEventListener("click", deletePicture);
			
		updateCounts();	
}	
	
var deletePicture = function (event) {
	console.log(event.target);
	console.log(event.currentTarget);
	document.getElementById('result').removeChild(event.target.parentNode.parentNode.parentNode);
	count--;
	countPictures.innerHTML=count;
}

addNewPicture.addEventListener("click", processNewElement);	



//Завдання №2
var input = document.querySelector('#exampleInputName2');
var textArea = document.querySelector('.row textarea');
var clearButton = document.querySelector('.col-xs-6 button');

input.addEventListener("keyup", copyText);
clearButton.addEventListener("click", clearText);

function copyText() {
   textArea.value = input.value;	 	
}

function clearText() {
    input.value = "";
    copyText();
}

// доделать удаление
// переделать создание элементов через createElement