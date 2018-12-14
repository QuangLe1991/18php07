function Addition() {
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	// document.write("Tong hai so ",a ," va ",b ," la : ",a + b,"<br>");
	var c = a + b;
	document.getElementById('Check').innerHTML = "<br>" + a + " + " + b + " = "+ c;
}
function Substraction() {
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var c = a - b;
	// document.write("Hieu hai so ",a ," va ",b ," la : ",a - b,"<br>");
	document.getElementById('Check').innerHTML = "<br>" + a + " - " + b + " = "+ c;
}
function Multiplication() {
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var c = a * b;
	// document.write("Tich hai so ",a ," va ",b ," la : ",a * b,"<br>");
	document.getElementById('Check').innerHTML = "<br>" + a + " x " + b + " = "+ c;
}
function Division() {
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var c = a / b;
	// document.write("Thuong hai so ",a ," va ",b ," la : ",a / b,"<br>");
	document.getElementById('Check').innerHTML = "<br>" + a + " / " + b + " = "+ c;
}
