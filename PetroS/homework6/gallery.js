// Это реальный объект на основе которого вам надо будет строить галлерею
'use strict';
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
}];


// это тестовый объект чтоб показать как вставлять в HTML
// вам надо пользоваться верхним 
var item = {
	url: "http://desktopwallpapers.org.ua/mini/201507/40065.jpg",
	name: "картинка 1",
	id : 1,
	description : "Using coLlor to add meaning only",
	date : 1422153200637
};

// Constant for display even and odd object from array
var SET_EVEN = true;
var SET_ODD = true;

//Constant for display start and stop object
var SET_START = 1;
var SET_STOP = 10; 

// temporary variables
var tempCount=1;
var tempRow=0;
var tempShow=1;
var setRow;


// Function for cutting string to defined character maximum and first letter in uppercase 
function transformString(instring,maxletter){
	var tempString = instring.trim();
	var	tempString1 = tempString.slice(0,1);
	var tempString2 = tempString.slice(1,parseInt(maxletter));
	return tempString1.toUpperCase() + tempString2.toLowerCase();
};

// Transform date from Unix format to defined format: ( year/month/date hours in non UTC time-zone:minutes )
function transformDate(indate){
   function addZero(inArg){
		return inArg = inArg > 9 ? inArg : ( inArg = "0" + inArg);  // Adding symbol 0 before Arg if Arg less then 10
   }
   var tempDate = new Date(indate);
   return  "( " + tempDate.getFullYear() + "/" + addZero(tempDate.getMonth()+1) +"/" + addZero(tempDate.getDate()) + " " + addZero(tempDate.getHours()) + ":" +  addZero(tempDate.getMinutes()) + " )";
 };


// Function for adding element in Div
function addHtmlElement(item,rowid){
    var resultHTML = "";
	var resultContainer = $(rowid);
    	var itemTemplate = '<div class="col-sm-3 col-xs-6" id=$bid>\
					<img src="$url" alt="$name" class="img-thumbnail">\
					<div class="info-wrapper">\
						<div class="text-muted">$number: $name</div>\
						<div class="text-muted">$description</div>\
						<div class="text-muted">$date</div>\
					</div>\
				</div>';

	resultHTML += itemTemplate
	    .replace("$bid", 'bid'+item.id)
		.replace("$number", item.id)
		.replace(/\$name/gi, transformString(item.name,15))
		.replace("$url", item.url)
		.replace("$description", transformString(item.description,37))
		.replace("$date", transformDate(item.date));
				
	resultContainer.append(resultHTML);
	
};
// This is for debugging : console.log("Start working");			
if ((SET_START>0) && (SET_START<=10) && (SET_STOP>0) && (SET_STOP<=10) && (SET_START<=SET_STOP)) { // Check for correct start stop parameter 	
	data.forEach(function(item, i, arr) {
			setRow = "#result" + Math.ceil(tempShow/4);
		
		if ((tempCount>=SET_START) && (tempCount<=SET_STOP)) {
			if  (SET_EVEN && (item.id%2==1)){
				// This is for debugging : console.log("even " + setRow + " item" + item.id + " count " + tempCount);
				addHtmlElement(item,setRow);
				tempShow++;
			};
			if  (SET_ODD && (item.id%2==0)){	
				// This is for debugging : console.log("odd " + setRow + " item" + item.id + " count " + tempCount);
				addHtmlElement(item,setRow);
				tempShow++;
				
			};
			
		}
		
		tempCount++;
})};

// DOM add element without JQuery
	 var el1 = document.createElement('div');
     el1.className = "col-sm-3 col-xs-6";
	 el1.id = "newContainerDiv";
	 var container = document.getElementById("result");
     container.appendChild(el1);
	 var el2 = document.createElement('img');
     el2.className = "img-thumbnail";
	 el2.setAttribute('src', data[0].url);
     el2.setAttribute('alt', data[0].name);
	 var el3 = document.createElement('div');
     el3.className = "info-wrapper";
	 el3.id = "newInfoDiv"
     var container = document.getElementById("newContainerDiv");
     container.appendChild(el2);
	 container.appendChild(el3);
     el1 = document.createElement('div');
	 el1.className ="text-muted";
	 el1.innerHTML = data[0].id + " : " + transformString(data[0].name,15);
	 el2 = document.createElement('div'); 
	 el2.className ="text-muted";
	 el2.innerHTML = transformString(data[0].description,38);
     el3 = document.createElement('div'); 
	 el3.className ="text-muted";
	 el3.innerHTML = transformDate(data[0].date);
	 container = document.getElementById("newInfoDiv");
     container.appendChild(el1);
	 container.appendChild(el2);
	 container.appendChild(el3);
						

