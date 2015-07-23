
	var total = 0;
	var presentHtml = document.getElementById("Kosti");
	var first , second ;
	
			var getNumber = function (){
				return Math.floor((Math.random() * 6) + 1);
			}
			
			var presentNumber = function (){
				presentHtml.innerHTML  += ("номер броска" + i + "_первая кость - " + first + "_ вторая кость - " + second );
				if (first == second){ 
					presentDobl (); 
				}
				else { 
					presentHtml.innerHTML  += "<br>"; 
				}
			}
			
			var presentDobl = function (){
				presentHtml.innerHTML +=  ("__двойное " + first + "<br>");
				
			}
			var presentTotalWin = function (){
				return presentHtml.innerHTML += ("<strong>" + "победа - " + total);
			}	
			var presentTotalLuse = function (){
				return presentHtml.innerHTML += ("<em>" + "проиграш - " + total);
			}
			
			var cikl = function (){
		  		first =	getNumber ();
		    	second = getNumber ();	
				total += first + second;
				presentNumber ();
		    }
			
			
			
		 for (var i = 1; i <= 15; i++){ 
			cikl (); 
		 }	
			 
			 
		total > 100 ? presentTotalWin() : presentTotalLuse();
	