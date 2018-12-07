var month;
function MonthChecking(month) {
	if ((month > 0) && (month <13)) {
		document.write("Day la thang ", month);
	} else {
		document.write("Day khong phai la thang trong nam");
	}

}
MonthChecking(13);