function OddEvenChecking() {
	var num = parseInt(document.getElementById('Number').value);
	if (num % 2 == 0) {
		document.getElementById('Check').innerHTML = "<br>So " + num + " la so chan";
	} else {
		document.getElementById('Check').innerHTML = "<br>So " + num + " la so le";
	}
}
function FibonacciChecking() {
	var num = parseInt(document.getElementById('Number').value);
	var f1 = 1, f2 = 1, f3 = 1;
	var flag = 0;
	while ((f1 + f2) <= 100) {
		if (num == (f1 + f2)) {
			flag = 1;
			document.getElementById('Check').innerHTML = "<br>So " + num + " la mot so Fiboncci nho hon 100";
			break;
		} else {
			flag = 0;	
		}
		f3 = f1 + f2;
		f1 = f2;
		f2 = f3;
	}
	if (flag == 0) {;
		document.getElementById('Check').innerHTML = "<br>So " + num + " khong phai la mot so Fiboncci nho hon 100";
	}
}
function SquareNumberChecking() {
	var num = parseInt(document.getElementById('Number').value);
	var flag = 0;
	for (i = 0; i <= (num/2); i++) {
		if (i*i == num) {
			document.getElementById('Check').innerHTML = "<br>So " + num + " = " + i + "*" + i + " la mot so chinh phuong";		
			flag = 1;
		}
	}
	if (flag == 0) {
		document.getElementById('Check').innerHTML = "<br>So " + num + " khong phai la mot so chinh phuong";		
	}
}

function PerfectNumberChecking() {
	var num = parseInt(document.getElementById('Number').value);
	var sum = 0;
	for (i = 1; i <= (num / 2); i++) {
		if (num % i == 0) {
			sum = sum + i;		
		}
	}
	if (num == sum) {
		document.getElementById('Check').innerHTML = "<br>So " + num + " la mot so hoan hao";			
	} else {
		document.getElementById('Check').innerHTML = "<br>So " + num + " khong phai la mot so hoan hao";			
	}
}