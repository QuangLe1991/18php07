var num;
function OddEven(num) {
	if (num % 2 == 0) {
		document.write("So ",num," la so chan");
	} else {
		document.write("So ",num," la so le");
	}
}
function FibonacciCheck(num) {
	var f1 = 1, f2 = 1;
	var f3, flag;
	while ((f1 + f2) <= 100) {
		if (num == (f1 + f2)) {
			flag = 1;
			document.write("So ",num," la so Fiboncci nho hon 100 <br>");
		} else {
			flag = 0;	
		}
		f3 = f1 + f2;
		f1 = f2;
		f2 = f3;
	}
	if (flag == 0) {
		document.write("So ",num," khong phai la so Fiboncci nho hon 100 <br>");
	}
}
function SquardNumberChecking(num) {
	for (i = 0; i <= (num/2); i++) {
		if (i*i == num) {
			document.write("So ",num," = ",i,"*",i," la so chinh phuong");
		}
	}
}
FibonacciCheck(60);
SquardNumberChecking(9);

