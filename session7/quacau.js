var data = new Array(1,2,4,6,7,10);
var result = new Array();
var min_time = data[0] + data[1]*2;

function MinTimeBridge() {
	people = data.length;
	result[0] = data[0];
	result[1] = data[1];
	result[2] = result[1] + data[0] + data[2];

	for (var i = 3; i < people ; i++) {
		result[i] = min(result[i-2] + min_time + data[i], result[i-1] + data[0] + data[i]);
	}

	return result[people-1];	
}	

function min(a, b){
	if (a > b){
		return b;
	} else {
		return a;
	}
}

document.write(MinTimeBridge());