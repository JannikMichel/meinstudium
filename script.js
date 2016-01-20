
var all = function() {
	var xmlhttp = new XMLHttpRequest();
	var url = "https://arsnova.eu/api/statistics/";

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var myArr = JSON.parse(xmlhttp.responseText);
			console.log(myArr);
			myFunction(myArr);
		}
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

	function myFunction(arr) {
		var out = "";
		$(".removable").remove();
		for ( var key in arr) {
			var lol = $("<p>");
			var span = $("<p>");
			span.addClass("badge");
			span.text(arr[key]);
			lol.addClass("removable");
			lol.text(key);
			lol.append(span);
			lol.insertAfter("#id01");
		}
	}
	;
};

$(document).ready(function(){
	all();
	var interval = setInterval(function() {
		all();
	}, 30000);
});