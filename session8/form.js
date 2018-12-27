var start = 1000;
var end = new Date().getFullYear();
var options = "";
for(var year = start ; year <=end; year++){
  options += "<option>"+ year +"</option>";
}
document.getElementById("year").innerHTML = options;

function BackgroundChange() {
	//Change back ground color
	var year = document.getElementById("year").value;
	if (year >= 1998) {
		document.getElementById("form").style.backgroundColor = "blue";
	} else {
		document.getElementById("form").style.backgroundColor = "yellow";
	}
	
	//Change avatar
	var male = document.getElementById("Male");
	var female = document.getElementById("Female");
	// console.log(gen.length);
	if (male.checked == true) {
		document.getElementById("avatar").src = "MaleDefaultImage.png";
	} else if (female.checked == true){
		document.getElementById("avatar").src = "FemaleDefaultImage.png";
	}
}