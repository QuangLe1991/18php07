var string = "";
var equal_flag = 0;
document.getElementById('result').innerHTML = "0";
function click_button(n) {	
	if (n == "ce") {
		string = "";
		document.getElementById('input').innerHTML = string;
		document.getElementById('result').innerHTML = "0";
		return;
	}
	if (equal_flag == 1) {
		string = "";
		document.getElementById('input').innerHTML = string;
		document.getElementById('result').innerHTML = "0";
		equal_flag = 0;
	}
	string += n;
	string = StrProcess(string);
	document.getElementById('input').innerHTML = string;
}

function calculate() {
	document.getElementById('result').innerHTML = eval(string);
	equal_flag = 1;
}

function StrProcess(string) {
	string = string.replace("..",".");
	string = string.replace("++","+");
	string = string.replace("+-","-");
	string = string.replace("+*","*");
	string = string.replace("+/","/");
	string = string.replace("--","-");
	string = string.replace("-+","+");
	string = string.replace("-*","*");
	string = string.replace("-/","/");
	string = string.replace("**","*");
	string = string.replace("*+","+");
	string = string.replace("*-","-");
	string = string.replace("*/","/");
	string = string.replace("//","/");
	string = string.replace("/+","+");
	string = string.replace("/-","-");
	string = string.replace("/*","*");
	return string;
}