function MonthChecking() {
	var month = parseInt(document.getElementById('Month').value);
	switch(month) {
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
			// document.write("Day la thang ", month);
			document.getElementById('Check').innerHTML = "<br>Day la thang " + month;
			break;
		default:
			// document.write("Day khong phai la thang trong nam");
			document.getElementById('Check').innerHTML = "<br>Day khong phai la mot thang trong nam"
			break;
	}

}
MonthChecking(13);