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
		var i = 0;
		
		for ( var key in arr) {
			var options1 = {
				title : {
					text : key
				},
				animationEnabled : true,
				data : [ {
					type : "column",
					dataPoints : [ {
						y : arr[key]
					} ]
				} ]
			};
			$("#chartContainer"+i).CanvasJSChart(options1);
			$("#chartContainer"+i).CanvasJSChart().render();
			i++;
		}

	}
	;
};

$(document).ready(function() {
	all();
	var interval = setInterval(function() {
		all();
	}, 30000);
});
