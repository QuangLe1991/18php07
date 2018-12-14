<<<<<<< HEAD
var month;
var year;
function MonthChecking(month, year) {
		switch (month) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				document.write("Thang ",month," nam ",year," co 31 ngay");
				break;
			case 2:
				if ((year % 4 == 0) && (year % 100 != 0)) {
					document.write("Thang 2 nam ",year," co 29 ngay");	
				} else {
					document.write("Thang 2 nam ",year," co 28 ngay");
				}
				break;
			case 4:
			case 6:
			case 9:
				document.write("Thang ",month," nam ",year," co 30 ngay");
				break;
			default:
				document.write("Thang ",month," khong phai thang cua nam");
				break;8	}
=======
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
>>>>>>> 35299406c85eef612989cbdeb94b65297fcd403f
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