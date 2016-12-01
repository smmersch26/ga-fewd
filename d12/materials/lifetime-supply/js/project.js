$("button").on("click", function(){
	var maxAge = $("#max-age").val();
	var age = $("#age").val();
	var numPerDay = $("#num-per-day").val();
	var solution = ((maxAge - age) * 365) * numPerDay
	var daysLeft = ((maxAge - age) * 365)
	var item = $("#item").val();;

	$("#solution").text(solution);
	$("#drink").text(item);
	$("#days-left").text(daysLeft);
})