"use strict"
// Это реальный объект на основе которого вам надо дудет строить галлерею
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

var resultContainer = $('#result');
var resultHTML = "";
var itemTemplate = '<div class="col-sm-3 col-xs-6">\
	<img src="$url" alt="$name" class="img-thumbnail">\
			<div class="info-wrapper">\
			<div class="text-muted">$number: $name</div>\
			<div class="text-muted">$description</div>\
			<div class="text-muted">$date</div>\
		</div>\
	</div>';

//from 0 to 10
var QUANTITY_OF_ELEMENTS = 5;
// 0 - all; 1 - odd; 2 - even
var ALL_EVEN_ODD = 1;	

function getNewName(name){
	return name[0].toUpperCase() + name.substring(1).toLowerCase();	
}

function getNewDescription(description){
	return description.slice(0, 15);
}

function getNewDate(date){
	var newDate = new Date(date);
	return newDate.getFullYear() + "/" + (newDate.getMonth() + 1) + "/" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes();
}

function filterOddEven(){
	return data.filter(function(item){
		if (ALL_EVEN_ODD == 1){
			return (item.id % 2 != 0);
		} else if (ALL_EVEN_ODD == 2){
			return (item.id % 2 == 0);
		} else {
			return data;
		}
	});	
}

function displayTheDataWithFilter(){
	var filteredData = filterOddEven();
	for(var i = 0; i < QUANTITY_OF_ELEMENTS; i++){
	resultHTML += itemTemplate
			.replace("$number", filteredData[i].id)
			.replace(/\$name/gi, getNewName(filteredData[i].name))
			.replace("$url", filteredData[i].url)
			.replace("$description", getNewDescription(filteredData[i].description))
			.replace("$date", getNewDate(filteredData[i].date));
	}
}

displayTheDataWithFilter();

resultContainer.html(resultHTML);		
			