"use strict"

var data = [{
    url: "http://desktopwallpapers.org.ua/mini/201507/40069.jpg",
    name: "МАШИНКА",
    id: 1,
    description: " be conveyed to users of assistive technologies – such as",
    date: 1422153200637
}, {
    url: "http://desktopwallpapers.org.ua/mini/201507/40068.jpg",
    name: "ДРУГАЯ МАШИНКА",
    id: 2,
    description: "sing color to add meaning to a button",
    date: 1421153200637
}, {
    url: "http://desktopwallpapers.org.ua/mini/201507/40067.jpg",
    name: "НАЗВАНИЕ",
    id: 3,
    description: " be conveyed to users of assistive technologies",
    date: 1426153200637
}, {
    url: "http://desktopwallpapers.org.ua/mini/201507/40066.jpg",
    name: "ОПИСАНИЕ",
    id: 4,
    description: "ssistive technologies – such as screen readers. Ensure",
    date: 1428153200637
}, {
    url: "http://desktopwallpapers.org.ua/mini/201507/40065.jpg",
    name: "ИМЯ МАШИНЫ",
    id: 5,
    description: "color to add meaning to a button only provides",
    date: 1402153200637
}, {
    url: "http://desktopwallpapers.org.ua/mini/201507/40064.jpg",
    name: "МЕРСЕДЕС",
    id: 6,
    description: "om the content itself (the visible text of the button)",
    date: 1442153200637
}, {
    url: "http://desktopwallpapers.org.ua/mini/201507/40063.jpg",
    name: "БМВ",
    id: 7,
    description: "r is either obvious from the content itself",
    date: 1482153200637
}, {
    url: "http://desktopwallpapers.org.ua/mini/201507/40062.jpg",
    name: "ЛАДА КАЛИНА",
    id: 8,
    description: "included through alternative means, such as additional text hidden with the",
    date: 1442153200637
}, {
    url: "http://desktopwallpapers.org.ua/mini/201507/40061.jpg",
    name: "ДЖИП",
    id: 9,
    description: " meaning to a button only provides a visual",
    date: 1322153200637
}, {
    url: "http://desktopwallpapers.org.ua/mini/201507/40060.jpg",
    name: "ДАЧА ЛОГАН",
    id: 10,
    description: "uded through alternative means, such as additional",
    date: 1322159200637
}];

var addNewElementButton = document.querySelector('.col-xs-12 button');
var numberOfElements = document.querySelector('#count');
var deleteButton = "";
var count = 0;
var resultContainer = $('#test');
var resultHTML = "";
var itemTemplate = '<div id="$id" class="col-sm-3 col-xs-6">\
	<img src="$url" alt="$testImage" class="img-thumbnail">\
			<div class="info-wrapper">\
			<div class="text-muted">$number: $name</div>\
			<div class="text-muted">$description</div>\
			<div class="text-muted">$date</div>\
			<div class="text-muted"><a href="#">Delete</a></div>\
			<br>\
		</div>\
	</div>';

addNewElementButton.addEventListener("click", addNewElement);

function getNewName(name) {
    return name[0].toUpperCase() + name.substring(1).toLowerCase();
}

function getNewDescription(description) {
    return description.slice(0, 15);
}

function getNewDate(date) {
    var newDate = new Date(date);
    return newDate.getFullYear() + "/" + (newDate.getMonth() + 1) + "/" +
        newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes();
}

function addNewElement() {
    if (count != data.length) {
        resultHTML += itemTemplate
            .replace("$number", data[count].id)
            .replace(/\$name/gi, getNewName(data[count].name))
            .replace("$url", data[count].url)
            .replace("$description", getNewDescription(data[count].description))
            .replace("$date", getNewDate(data[count].date))
            .replace("$id", "id" + count);
        count++;
        numberOfElements.innerHTML = count;
        resultContainer.html(resultHTML);
        deleteButton = document.querySelector('#id0');
    }
    //deleteButton = document.querySelector('#id0');
    deleteButton.addEventListener("click", deleteTheElement);
}

function deleteTheElement() {
    console.log(deleteButton);

}