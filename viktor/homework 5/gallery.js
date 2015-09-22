// Это реальный объект на основе которого вам надо будет строить галлерею
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



var maxObj=10,
	sortObj=0; // 0 - все, 1 - не чётные, 2 - чётние!

var filterEvenOdd = function(arg){
 
	return ((sortObj!==1 && sortObj!==2 ) || 
			(sortObj==1 && arg%2!==0) || 
			(sortObj==2 && arg%2==0)) 
			|| false;

};
var filterCount = function (id) {
	return id <=maxObj;
};
var filterByConfig = function () {
	var filtredData = [];
    for (var key in data){
        var id = data[key].id;

        if(filterEvenOdd(id) && filterCount(id) ){
            filtredData.push(data[key]);
        }
    }

	return filtredData;
};


var newName = function(oldName){
    oldName = oldName.toLowerCase();
    oldName = oldName[0].toUpperCase()+oldName.slice(1);
    return oldName;
};
var newDescr = function(descr){
    return descr.slice(0,14);
};
var newDate = function(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
};


var output = function(filtredData){
   var tmpResult;
    for (var key in filtredData){
        tmpResult =  '<div class="col-sm-3 col-xs-6">\
				<img src="'+ filtredData[key].url + '" alt="'+ newName(filtredData[key].name) + '" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">'+ filtredData[key].id + ' '+ newName(filtredData[key].name) + '</div>\
					<div class="text-muted">'+ newDescr(filtredData[key].description) + '</div>\
					<div class="text-muted">'+ newDate(filtredData[key].date) + '</div>\
				</div>\
			</div>';
        document.getElementById("result").innerHTML += tmpResult;
    }

} ;


var init = function() {
	var filtered = filterByConfig();
	output(filtered);
};

init();


