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

var countContainer = $('#count');

var resultHTML = 0;

var button = document.querySelector('.btn');

var count = 0;


function addPicture() {

	
		count++;
		data.forEach(function(item, i, arr) {
	
			if(count - 1 == i) {
				document.querySelector('.btn').disabled = false;
				var formattedDate = new Date(item.date);
				item.date = formattedDate.getFullYear() + "/" 
				+ (formattedDate.getMonth() + 1) + "/" 
				+ formattedDate.getDate();

				var element = document.createElement('div');
				element.className = "col-sm-3 col-xs-6";
				var result = document.getElementById('result');
				result.appendChild(element);

				var img = document.createElement('img');
				img.src = item.url;
				img.alt = item.name;
				img.className = "img-thumbnail";
				element.appendChild(img);

				var infoWrapper = document.createElement('div');
				infoWrapper.className = "info-wrapper";
				element.appendChild(infoWrapper);

				var pictInfo1 = document.createElement('div');
				pictInfo1.className = "text-muted";
				pictInfo1.innerHTML = item.id + ": " + item.name;
				infoWrapper.appendChild(pictInfo1);

				var pictInfo2 = document.createElement('div');
				pictInfo2.className = "text-muted";
				pictInfo2.innerHTML = item.description;
				infoWrapper.appendChild(pictInfo2);

				var pictInfo3 = document.createElement('div');
				pictInfo3.className = "text-muted";
				pictInfo3.innerHTML = item.date;
				infoWrapper.appendChild(pictInfo3);

				var pictDel = document.createElement('div');
				pictDel.className = "text-muted";
				pictDel.innerHTML = "<a href=\"#\" onclick=\"deletePicture(" 
				+ item.id + ")\">Удалить<br></a>";
				infoWrapper.appendChild(pictDel);
			}
			if(count == data.length) {
				document.querySelector('.btn').disabled = true;		
			}
		});			
	 
	resultHTML = count;
	countContainer.html(resultHTML);
}


function deletePicture(number) {
	console.log("we try to delete");
	data.map(function(item, i, arr) {
		if(number == item.id) {
			data.splice(i, 1);
			count--;
			return data;
		} else return data;
		
	});
}

button.addEventListener("click", addPicture);

