var f1 = 1;
var f2 = 1;
var f3; 
var count = 0;
document.write(f1," ",f2," ");
function fibonacci ( f1 , f2 ) {
	f3 = f1 + f2 ;
	if (f3 <= 100) {
		document.write(f3," ");	
		f1 = f2;
		f2 = f3;
		fibonacci(f1,f2);
	} else {
		return;
	}
}
fibonacci(f1,f2);
