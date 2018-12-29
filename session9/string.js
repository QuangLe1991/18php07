function Check() {
	var  name = document.getElementById('name').value;
	var  char = document.getElementById('char').value;
	var  tmp_name = name.toLowerCase();
	var  count = 0;

	// Check how many char in  name
	while (tmp_name.indexOf(char) >= 0) {
		count ++;
		tmp_name = tmp_name.substring(tmp_name.indexOf(char) + 1,tmp_name.length);
	}
	
	document.getElementById('display').innerHTML = (count > 0)?"Co "+count+" chu "+char+" trong ten.<br>":"Khong co chu "+char+" nao trong ten.<br>";

	//Check lengh of name with and without blank
	tmp_name = name; 
	var space = 0;
	while (tmp_name.indexOf(" ") >= 0) {
		space ++;
		tmp_name = tmp_name.substring(tmp_name.indexOf(" ") + 1,tmp_name.length);
	}
	console.log(tmp_name);
	document.getElementById('display').innerHTML += "Ten "+name+" dai "+name.length+" ky tu (ke ca khoang trang)<br>";
	document.getElementById('display').innerHTML += "Ten "+name+" dai "+(name.length - space)+" ky tu (khong ke khoang trang)<br>";

	//Convert to upper case first name and lower case middle name
	//Upper case first name
	tmp_name = name; 
	var first_space = tmp_name.indexOf(" ");
	document.getElementById('display').innerHTML += "In hoa ho : "+name.replace(name.substring(0,first_space),name.substring(0,first_space).toUpperCase())+"<br>";

	//Lower case middle name
	var last_space = 1;
	while (tmp_name.indexOf(" ") >= 0) {
		last_space += tmp_name.indexOf(" ");
		tmp_name = tmp_name.substring(tmp_name.indexOf(" ") + 1,tmp_name.length);
	}
	document.getElementById('display').innerHTML += "In thuong ten dem : "+name.replace(name.substring(first_space + 1,last_space + 1),name.substring(first_space + 1,last_space + 1).toLowerCase())+"<br>";


}
function ChangeName() {
	var str = document.getElementById('control').value;
	if (str.search("Disable") >= 0) {
		document.getElementById('changename').style.display = "none";
		document.getElementById('control').value = "Enable change name"
		return;
	}
	if (str.search("Enable") >= 0) {
		document.getElementById('changename').style.display = "block";
		document.getElementById('control').value = "Disable change name"
		return;
	}
}
function Change() {
	var name = document.getElementById('name').value;
	var replace_name = document.getElementById('c_name').value;
	var last_name = name;

	while (last_name.indexOf(" ") >= 0) {
		last_name = last_name.substring(last_name.indexOf(" ") + 1,last_name.length);
	}

	document.getElementById('display').innerHTML = name.replace(last_name,replace_name);
}