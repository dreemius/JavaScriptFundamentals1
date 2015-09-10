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

var Slider = {	
	dataLength	 : 0,
	currentCount : 0,
	count 		 : 0,
	data       	 : [],
	
	run : function(data) {
        this.data = data;
        this.dataLength = (data.length-1);
		var that = this;
        document.querySelector('#addObject').addEventListener("click", this.processNewElement.bind(this));  
        document.querySelector('#result').addEventListener("click", function(event){that.deleteElement(event);	});  
    },
	
	descriptionSlice : function(description){
		return description.slice(0,14);
	},
	nameToLowerCase:function(name){
		return name.replace(name.substr(1),(name.substr(1)).toLowerCase());
	},
	addZero:function (i) {
		return (i < 10) ? ("0" + i) : i;
	},

	changeDateFormat: function (date){	
		newDate =new Date(date);	
		new_date = this.addZero(newDate.getDate());
		new_month = this.addZero(newDate.getMonth()+1);
		new_year = newDate.getFullYear();
		new_hours = this.addZero(newDate.getHours());
		new_minutes = this.addZero(newDate.getMinutes());	
		return (new_year + "/" + new_month + "/" + new_date + " " + new_hours+":"+new_minutes);	
	},
	
	createCustomElement : function (config) {		
		var el 			        = document.createElement(config.type);
        el.className 	        = config.class;
        if (config.src) {el.src = config.src};
        if (config.insertText) {el.innerHTML = config.insertText};
        if (config.href) {el.hrefL = config.href};
        config.parentElement.appendChild(el);
        return el;
	},	

	updateCounts : function(event) {
        event.target.id == 'addObject' ? (this.currentCount == this.dataLength ?
            this.currentCount = 0 : this.currentCount++, this.count++) :
                    (this.count--);
        document.querySelector('#count').innerHTML = this.count;
    },
	
	processNewElement : function(){
		mainDiv = document.querySelector('#result');
			
		var secondDiv = this.createCustomElement ({
			type 			: 'div',
			class			: 'col-sm-3 col-xs-6',
			parentElement 	: mainDiv
		});

		var imgURL = this.createCustomElement ({
			type 			: 'img',
			class			: 'img-thumbnail',
			parentElement 	: secondDiv,
			src				: data[this.currentCount].url
		});
				
		var thirdDiv = this.createCustomElement ({
			type 			: 'div',
			class			: 'info-wrapper',
			parentElement 	: secondDiv
		});
		
		var lastDiv1 = this.createCustomElement ({
			type 			: 'div',
			class			: 'text-muted',
			parentElement 	: thirdDiv,
			insertText		: data[this.currentCount].id + ' ' + this.nameToLowerCase(data[this.currentCount].name)
		});
		
		var lastDiv2 = this.createCustomElement ({
			type 			: 'div',
			class			: 'text-muted',
			parentElement 	: thirdDiv,
			insertText		: this.descriptionSlice(data[this.currentCount].description)
		});
		
		var lastDiv3 = this.createCustomElement ({
			type 			: 'div',
			class			: 'text-muted',
			parentElement 	: thirdDiv,
			insertText		: this.changeDateFormat(data[this.currentCount].date)
		});
		
		var delDiv = this.createCustomElement ({
            type 			: 'div',
            class			: 'text-muted',
            parentElement 	: thirdDiv
        });

        var delLink = this.createCustomElement ({
            type 			: 'a',
            href			: '#',
            class			: 'remove',
            insertText       : 'Удалить',
            parentElement 	: delDiv
        });
			
		this.updateCounts(event);	
	},
	
	deleteElement : function(event){
        if(event.target.className == 'remove'){
            document.querySelector('#result').removeChild(event.target.closest('.col-sm-3'));
            this.updateCounts(event)

        }
    }
}

Slider.run(data);


