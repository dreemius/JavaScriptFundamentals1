// Это реальный объект на основе которого вам надо дудет строить галлерею
var data = [{
	url: "http://desktopwallpapers.org.ua/mini/201507/40061.jpg",
	name: "ИМЯ МАШИНЫ",
	id : 5,
	description : "color to add meaning to a button only provides",
	date : 1402153200637
}]
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
  
var newDate = myDateFormat(data[0].date); 
var newStr  = descriptionSlice(data[0].description);
var newName = nameToLowerCase(data[0].name);
  
  
var myDiv = document.getElementById('result');

var firstData = document.createElement('div');
    firstData.className = "col-sm-3 col-xs-12";
	myDiv.appendChild(firstData);
     
var secondData = document.createElement('img');
    secondData.src = data[0].url;
    secondData.className= "img-thumbnail";
    firstData.appendChild(secondData);
	
var thirdData = document.createElement('div');
    thirdData.className = "Inform-wrapper";
    firstData.appendChild(thirdData);
	
var nameData = document.createElement('div');
    nameData.className = "text-div";
    nameData.innerHTML = data[0].id  + ' ' + newName;
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


	
	
	
	
