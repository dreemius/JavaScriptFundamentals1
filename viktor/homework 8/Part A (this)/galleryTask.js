/*Task one*/

var builder = {
    maxCount        : 0,
    currentCount    : 0,
    count           : 0,
    data            : [],
    that            : [],



    init : function(data) {
        this.data = data;
        this.maxCount = (data.length-1);
        var that = this;  // ????
        document.querySelector('#addObj').addEventListener("click", this.processNewElement.bind(this));
        document.querySelector('#test').addEventListener("click", function(event){that.delteElement(event);	});
    },

    createCustomElement : function (config) {
        var el 			        = document.createElement(config.type);
        el.className 	        = config.class;
        if (config.src) {el.src = config.src}
        if (config.innerHTML) {el.innerHTML = config.innerHTML}
        if (config.href) {el.hrefL = config.href}
        config.parentElement.appendChild(el);
        return el;
    },

    updateCounts : function(event) {
        event.id == 'addObj' ? (this.currentCount == this.maxCount ?
            this.currentCount = 0 : this.currentCount++, this.count++) :
                    (this.currentCount--, this.count--);
        document.querySelector('#count').innerHTML = this.count;
    },

    newDate : function(date){
        var tmpDate = new Date(date);
        return tmpDate.getFullYear() + "/" +
        tmpDate.getMonth() + "/" +
        tmpDate.getDate() + " " +
        tmpDate.getHours() + ":" +
        tmpDate.getMinutes();
    },

    processNewElement : function(){
        console.log(this);
        var mainDiv = document.querySelector("#test");

        var secondDiv = builder.createCustomElement ({
            type 			: 'div',
            class			: 'col-sm-3 col-xs-6',
            parentElement 	: mainDiv
        });

        var imgURL = builder.createCustomElement ({
            type 			: 'img',
            class			: 'img-thumbnail',
            parentElement 	: secondDiv,
            src				: data[builder.currentCount].url
        });

        var thirdDiv = builder.createCustomElement ({
            type 			: 'div',
            class			: 'info-wrapper',
            parentElement 	: secondDiv
        });

        var lastDiv1 = builder.createCustomElement ({
            type 			: 'div',
            class			: 'text-muted',
            innerHTML       : data[builder.currentCount].id + ' ' + data[builder.currentCount].name,
            parentElement 	: thirdDiv
        });

        var lastDiv2 = builder.createCustomElement ({
            type 			: 'div',
            class			: 'text-muted',
            innerHTML       : data[builder.currentCount].description,
            parentElement 	: thirdDiv
        });

        var lastDiv3 = builder.createCustomElement ({
            type 			: 'div',
            class			: 'text-muted',
            innerHTML       : builder.newDate(data[builder.currentCount].date),
            parentElement 	: thirdDiv
        });

        var delDiv = builder.createCustomElement ({
            type 			: 'div',
            class			: 'text-muted',
            parentElement 	: thirdDiv
        });

        var delLink = builder.createCustomElement ({
            type 			: 'a',
            href			: '#',
            class			: 'remove',
            innerHTML       : 'Удалить',
            parentElement 	: delDiv
        });

        builder.updateCounts(event);
},

    delteElement : function(event){
        if(event.target.className == 'remove'){
            document.querySelector('#test').removeChild(event.target.closest('.col-sm-3'));
            builder.updateCounts(event)

        }
    }

};

builder.init(data);



	//document.querySelector('#test').removeChild(event.target.closest('.col-sm-3'));
    //updateCounts();
//};
	
	// сделать все через вызов функции createCustomElement +
	// вынести удаление в функцию и передать туда первый аргумент event +
	// поменять jquery подход на нативный +
	// getElementById -> querySelector +

	














	
	
/*Task two*/

$("#exampleInputName2").keyup(function(){
	$("#targetInput").val($("#exampleInputName2").val());
});

$("#clean").click(function(){
	$("#exampleInputName2").val("");
	$("#targetInput").val("");
});