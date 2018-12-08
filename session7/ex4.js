var num;
function NumChecking1() {
	for (num = 0; num <= 100; num++) {
		if ((num % 3 == 0) && (num % 15 != 0)) {
			document.write("So ",num," chia het cho 3 <br>");
		} else if ((num % 5 == 0) && (num % 15 != 0)) {
			document.write("So ",num," chia het cho 5 <br>");
		} else if (num % 15 == 0) {
			document.write("So ",num," chia het cho 15 <br>");
		} else {
			document.write("So ",num," khong chia het cho 3, 5, 15 <br>");
		}
	}
}
function NumChecking2() {
	num = 0;
	while (num <= 100) {
		if ((num % 3 == 0) && (num % 15 != 0)) {
			document.write("So ",num," chia het cho 3 <br>");
		} else if ((num % 5 == 0) && (num % 15 != 0)) {
			document.write("So ",num," chia het cho 5 <br>");
		} else if (num % 15 == 0) {
			document.write("So ",num," chia het cho 15 <br>");
		} else {
			document.write("So ",num," khong chia het cho 3, 5, 15 <br>");
		}
		num++;
	}
}
NumChecking2();