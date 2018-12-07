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
				break;
		}
}
MonthChecking(3, 2000);