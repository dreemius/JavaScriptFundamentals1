var NUMBER_TO_DISPLAY = 10;

var EVEN_ODD_ALL = 0; // 0 - all, 1 - odd, 2 - even

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

var dataToDisplay = chooseDataToDisplay();

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

var formattedDate = 0;

var count = 0;


function chooseDataToDisplay() {
	
	return data.filter(function(item) {
		var formattedDate = new Date(item.date);
		item.date = formattedDate.getFullYear() + "/" + 
		(formattedDate.getMonth() + 1) + "/" + 
		formattedDate.getDate();
		
		if (EVEN_ODD_ALL == 1) {
			return item.id % 2 != 0;
		} else if (EVEN_ODD_ALL == 2) {
			return item.id % 2 == 0;
		} else return data;
	});
};


function buildDiv() {
	
	var el = document.createElement('div');
	el.id = "result2";
	el.class = "row";
	var container = document.getElementById('container');
	container.appendChild(el);
	
	var picture = document.createElement('div');
	picture.id = "theImage";
	picture.class = "col-sm-3 col-xs-6";
	var result2 = document.getElementById('result2');
	result2.appendChild(picture);
	
	var img = document.createElement('img');
	img.src = data[0].url;
	img.alt = data[0].name;
	img.class = "img-thumbnail";
	var theImage = document.getElementById('theImage');
	theImage.appendChild(img);

	var inf = document.createElement('div');
	inf.id = "inf";
	inf.class = "info-wrapper";
	theImage.appendChild(inf);

	var numberAndName = document.createElement('div');
	numberAndName.class = "text-muted";
	numberAndName.innerHTML = data[0].id + ": " + data[0].name;
	var info = document.getElementById('inf');
	info.appendChild(numberAndName);

	var description = document.createElement('div');
	description.class = "text-muted";
	description.innerHTML = data[0].description;
	info.appendChild(description);

	var date = document.createElement('div');
	date.class = "text-muted";
	date.innerHTML = data[0].date;
	info.appendChild(date);
};


dataToDisplay.forEach(function(item) {
	
	count++;
	if(count <= NUMBER_TO_DISPLAY) {
		resultHTML += itemTemplate
		.replace("$number", item.id)
		.replace(/\$name/gi, item.name)
		.replace("$url", item.url)
		.replace("$description", item.description)
		.replace("$date", item.date);
	};
});


resultContainer.html(resultHTML);


buildDiv();
