
	var total = 0;
	var presentHtml = document.getElementById("Kosti");
	var first , second ;
	
			var getNumber = function (){
				return Math.floor((Math.random() * 6) + 1);
			}
			
			var presentNumber = function (){
				presentHtml.innerHTML  += ("����� ������" + i + "_������ ����� - " + first + "_ ������ ����� - " + second );
				if (first == second){ 
					presentDobl (); 
				}
				else { 
					presentHtml.innerHTML  += "<br>"; 
				}
			}
			
			var presentDobl = function (){
				presentHtml.innerHTML +=  ("__������� " + first + "<br>");
				
			}
			var presentTotalWin = function (){
				return presentHtml.innerHTML += ("<strong>" + "������ - " + total);
			}	
			var presentTotalLuse = function (){
				return presentHtml.innerHTML += ("<em>" + "�������� - " + total);
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
	