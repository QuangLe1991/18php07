function MonthChecking() {
	var month = parseInt(document.getElementById('Month').value);
	var year = parseInt(document.getElementById('Year').value);
	if ((month > 0) && (month < 13)) {
		switch (month) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12: 
				document.getElementById('Check').innerHTML = "<br>Thang " + month + " nam " + year + " co 31 ngay";
				break;
			case 2:
				if ((year % 4 == 0) && (year % 100 != 0)) {	
					document.getElementById('Check').innerHTML = "<br>Thang 2 nam " + year + " co 29 ngay";
				} else {
					document.getElementById('Check').innerHTML = "<br>Thang 2 nam " + year + " co 28 ngay";
				}
				break;
			default:
				document.getElementById('Check').innerHTML = "<br>Thang " + month + " nam " + year + " co 30 ngay";
				break;		
		}		
	} else {
		document.getElementById('Check').innerHTML = "<br>Thang " + month + " khong phai la thang cua nam";
	}
}

