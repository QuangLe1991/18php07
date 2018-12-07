var f1 = 1;
var f2 = 1; 
var count = 0;
document.write(f1," ",f2," ");
function fibonacci ( f1 , f2 ) {
	if (f1 + f2 <= 100) {
		document.write(f1+f2," ");	
		fibonacci(f2,f1+f2);
	} else {
		return;
	}
}
fibonacci(f1,f2);
