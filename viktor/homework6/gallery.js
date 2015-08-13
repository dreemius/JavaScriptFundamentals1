// Это реальный объект на основе которого вам надо дудет строить галлерею
var data = [{
	url: "http://desktopwallpapers.org.ua/mini/201507/40069.jpg",
	name: "МАШИНКА",
	id : 1,
	description: " be conveyed to users of assistive technologies – such as",
	date : 1422153200637
}];


var mainDiv = document.getElementById('result');

var secondDiv = document.createElement('div');
    secondDiv.className = "col-sm-3 col-xs-6";
    mainDiv.appendChild(secondDiv);
	
var imgURL = document.createElement('img');
	imgURL.src = data[0].url;
	imgURL.className = 'img-thumbnail';
	secondDiv.appendChild(imgURL);
		
var thirdDiv = document.createElement('div');
	thirdDiv.className = "info-wrapper";
	secondDiv.appendChild(thirdDiv);
 
var lastDiv1 = document.createElement('div');
	lastDiv1.className = "text-muted";
	lastDiv1.innerHTML = data[0].id + ' ' + data[0].name;
	thirdDiv.appendChild(lastDiv1);
	
var lastDiv2 = document.createElement('div');
	lastDiv2.className = "text-muted";
	lastDiv2.innerHTML = data[0].description;
	thirdDiv.appendChild(lastDiv2);
	
var lastDiv3 = document.createElement('div');
	lastDiv3.className = "text-muted";
	lastDiv3.innerHTML = data[0].date;
	thirdDiv.appendChild(lastDiv3);

//<div id="test" class="row">
//			<div class="col-sm-3 col-xs-6">
//				<img src="http://desktopwallpapers.org.ua/mini/201507/40066.jpg" alt="testImage" class="img-thumbnail">
//				<div class="info-wrapper">
//					<div class="text-muted">03: Имя</div>
//					<div class="text-muted">Описане</div>
//					<div class="text-muted">Дата в формате (2014/05/25)</div>
//				</div>
//			</div>
//		</div> 