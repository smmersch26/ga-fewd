var america = prompt("Do you live in the United States of America?");

if (america === "yes"){
	$("button").on("click", function(){
	var temperature = $("input").val();
	var converted = (temperature * 2) + 30;

	$("#converted").text(converted);
})}else{
		$("#system").text("Fahrenheit");
		$("#othersystem").text("Celcius");

		$("button").on("click", function(){
			var temperature = $("input").val();
			var converted = (temperature - 30) / 2;

			$("#converted").text(converted);
		})
	}
