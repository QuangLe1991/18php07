var Euro, Usd, Candies;
Euro  	= 0;
Usd   	= 0;
Candies = 0;

while (Candies < 50) {
	if (Euro <= 0) {
		Usd  = Usd - 5;
		Euro = Euro + 3;
		Candies++;
	} else {
		Usd = Usd + 3;
		Euro = Euro - 2;
		Candies++;
	}
}

document.write("Buratino da ton " + Usd*(-1) + " USD de co duoc mon qua 50 vien keo");