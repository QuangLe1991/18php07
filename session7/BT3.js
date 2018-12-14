var Budget, Candies, Packet;
Budget = 2000;
Packet = 0;
Candies = 0;
while ((Budget >= 0)) {
	if (Packet < 2) {
		Candies++;
		Packet++;
		Budget = Budget - 200;
	} else if ((Packet == 2) && (Budget == 0)) {
		Packet = Packet - 2;
		Candies++;
		break;
	} else {
		Packet = Packet - 1;
		Candies++;
	}

}
document.write("So keo mua duoc voi 2000 VND la : ",Candies," vien");