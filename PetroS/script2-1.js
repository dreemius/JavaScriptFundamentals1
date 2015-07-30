
"use strict";
//Three variables
	var var1 = 3;
    var var2,var3;
	var2 = var1;
	var3 = var1;
	console.log('All are equal');
	console.log(var1);
	console.log(var2);
	console.log(var3);
	console.log('Different variables');
	var2 += 3;
	var3 -= 1;
	console.log(var1);
	console.log(var2);
	console.log(var3);
//Part 2 
	console.log("Types");
	var newVariable
	console.log(newVariable);
	newVariable=1;
	console.log(newVariable);
	newVariable="String";
	console.log(newVariable);
	newVariable=true;
	console.log(newVariable);
	newVariable=null;
	console.log(typeof(newVariable));
	 var a,z;
	 a = z = (12 + 8) * 2; //  50 ????  40 
	console.log( a);
//Part 3
    var var3 =0;
	var3 += 3;
	a = z = var3;
	console.log('A - ',a,' Z - ',z);
//Part4
	var b = 3.12;
	var c = "Text";
	console.log('Variable one:');
	console.log(b);
	console.log(parseFloat(b));
	console.log(parseInt(b));
	console.log(Boolean(b));
	console.log(String(b));
	console.log('Variable two:');
	console.log(c);
	console.log(parseFloat(c));
	console.log(parseInt(c));
	console.log(Boolean(c));
	console.log(String(c));
	console.log('Types');
	console.log(true && false);  //false
console.log(true && true );  //true

console.log("test" && 0 );
console.log(null && true );
console.log(true && 15 && "string" );
	