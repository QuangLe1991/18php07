function MaxNumberChecking() {
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var c = parseInt(document.getElementById('c').value);
	var d = parseInt(document.getElementById('d').value);
	var max = a, id = "a";
	if (b > a) {
		max = b;
		id = "b";
	} 
	if (c > max) {
		max = c;
		id = "c";
	}
	if (d > max) {
		max = d;
		id = "d";
	}
	document.getElementById('Check').innerHTML = "<br>So lon nhat la : " + id + " = " + max;
}