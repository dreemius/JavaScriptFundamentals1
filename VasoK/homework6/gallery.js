// Это реальный объект на основе которого вам надо дудет строить галлерею
var data = [{
	url: "http://desktopwallpapers.org.ua/mini/201507/40069.jpg",
	name: "МАШИНКА",
	id : 1,
	description : " be conveyed to users of assistive technologies – such as",
	date : 1422153200637
}]

function descriptionSlice(description){
  return description.slice(0,14);
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
	var newDate = changeDateFormat(data[0].date);
	var newStr= descriptionSlice(data[0].description);
	var newName = nameToLowerCase(data[0].name);		
	var result2 = document.getElementById("result2");	
		
	var generalDiv = document.createElement('div');     
    generalDiv.className = "col-sm-3 col-xs-12";        
    result2.appendChild(generalDiv);
	 
	var insertImg = document.createElement('img');     
    insertImg.className = "img-thumbnail";     
	insertImg.src = data[0].url;
	insertImg.alt = newName;     
    generalDiv.appendChild(insertImg);
	 
	var infoDiv = document.createElement('div');     
    infoDiv.className = "info-wrapper";          
    generalDiv.appendChild(infoDiv);
	 
	var firstDiv = document.createElement('div');     
    firstDiv.className = "text-muted";      
	firstDiv.innerHTML = data[0].id+":"+newName;	 
    infoDiv.appendChild(firstDiv);
	 
	var secondDiv = document.createElement('div');     
    secondDiv.className = "text-muted";     
	secondDiv.innerHTML = newStr;	 
    infoDiv.appendChild(secondDiv);
	 
	var thirdDiv = document.createElement('div');     
    thirdDiv.className = "text-muted";    
	thirdDiv.id = "date";     
	thirdDiv.innerHTML = newDate;
    infoDiv.appendChild(thirdDiv);