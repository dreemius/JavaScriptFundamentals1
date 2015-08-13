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


function addZero(inDt) { // Check value for add zero when convert to  readable format
	return (inDt < 10) ? ("0" + inDt) : inDt;
}
function addYear(inYear) { // Check for year add  
 return (parseInt(inYear) < 2000 ) ? ("2" + inYear) : inYear;
}

function normalizeDateFormat(dateIN){ // Normalize date in readable format 
	var tempDate = new Date(dateIN);
	return (addYear(tempDate.getYear()) + "/" + addZero(tempDate.getMonth()) + "/" + addZero(tempDate.getDay()) + " " + addZero(tempDate.getHours()) + ":" + addZero(tempDate.getMinutes()));
}


function name15(namein){  //Made fist letter in upper case and define maximum number of letter in field name, all other letter in lower case
    var tempIn = namein.trim(); // Trim spaces
	var firstLetter;
	var nextLetter;
	var maxLetter = 15; //Define maximum letter in name field;
	if (tempIn !== "" ){ // Check for empty field
		firstLetter = tempIn.slice(0,1);
		nextLetter = tempIn.slice(1,maxLetter-1);
		return firstLetter.toUpperCase() + nextLetter.toLowerCase(); // Return value of new string
		}
	}
	   


// это тестовый объект чтоб показать как вставлять в HTML
// вам надо пользоваться верхним 
var item1 = {
	url: "http://desktopwallpapers.org.ua/mini/201507/40065.jpg",
	name: " картиНка 1  ",
	id : 1,
	description : "Using color to add meaning only",
	date : 14221536200637
}
var resultContainer = $('#result');
	var resultHTML = "";
var elementCount = 0;	
var showCount = 0;
var IS_EVEN = true; // define to show even picture
var IS_ODD = true; // define to show odd picture
var MAX_PICTURE = 10; // define maximum picture to show
var MIN_PICTURE = 1; // define minimum picture to show

function outObj (item){
	
	var itemTemplate = '<div class="col-sm-3 col-xs-6">\
					<img src="$url" alt="$name" class="img-thumbnail">\
					<div class="info-wrapper">\
						<div class="text-muted">$number: $name</div>\
						<div class="text-muted">$description</div>\
						<div class="text-muted">$date</div>\
					</div>\
				</div>';

	resultHTML += itemTemplate
		.replace("$number", item.id)
		.replace(/\$name/gi, name15(item.name))
		.replace("$url", item.url)
		.replace("$description", item.description)
		.replace("$date", normalizeDateFormat(item.date));
	
}		




data.forEach(function(item,index,array) {
	elementCount++;
	if ((showCount/4)==0)  {resultHTML += '<div id="Out" class="row">'}
	if ((showCount/4)==1)  {resultHTML += '</div><div id="Out1" class="row">'}
	if ((showCount/4)==2)  {resultHTML += '</div><div id="Out2" class="row">'}
	if ((elementCount >= MIN_PICTURE) && (elementCount <= MAX_PICTURE)) {
		if  (IS_EVEN && ( elementCount % 2)) {
			outObj(array[index]); 
			showCount++;}
		if  (IS_ODD && (( elementCount % 2)-1)) {
			outObj(array[index]);
			showCount++; }
	}

	console.log(0 / 4);

});
	resultContainer.html(resultHTML);	

