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
}]

//			INSTUCTIONS
// всі:			START_ELEMENT=0;  ADDITION_SIZE=1;
// непарні: 	START_ELEMENT=0;  ADDITION_SIZE=2;
// парні: 		START_ELEMENT=1;  ADDITION_SIZE=2;


var COUNT_ELEMENTS=10;
var START_ELEMENT=1;
var ADDITION_SIZE=2;

var resultContainer = $('#result');
var resultHTML = "";

function descriptionSlice(description){
  return description.slice(0,15);
}
function nameToLowerCase(name){
  return name.replace(name.substr(1),(name.substr(1)).toLowerCase());
}
function addZero(i) {
	return (i < 10) ? ("0" + i) : i;
/*	if (i < 10) {
        i = "0" + i;
    } return i;
	*/
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

for (var i = START_ELEMENT; i < COUNT_ELEMENTS; i+=ADDITION_SIZE) {
	var itemTemplate = '<div class="col-sm-3 col-xs-12">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted" id="date">$date</div>\
				</div>\
			</div>';	
	
	var newDate = changeDateFormat(data[i].date);
	var newStr= descriptionSlice(data[i].description);
	var newName = nameToLowerCase(data[i].name);
	
	resultHTML += itemTemplate
		.replace("$number", data[i].id)
		.replace(/\$name/gi, newName)
		.replace("$url", data[i].url)
		.replace("$description", newStr)
		.replace("$date", newDate);		
}

resultContainer.html(resultHTML);	

