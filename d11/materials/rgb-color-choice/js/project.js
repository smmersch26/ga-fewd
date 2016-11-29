$("#color-button").on("click", function(){
	var red = $("#red").val();
	console.log(red);
	var green = $("#green").val();
	console.log(green);
	var blue = $("#blue").val();
	console.log(blue);
	var rgb = "rgb(" + red + "," + blue + "," + green + ")";
	console.log(rgb);

	$("#wrapper").css("background-color", rgb);
	$("#colorful-text").text(rgb);
});

$("#color-button").on("click",function(){
	var red = Math.random() * 255;
	console.log(red);
  	var green = Math.random() * 255;
  	console.log(green);
  	var blue = Math.random() * 255;
  	console.log(blue);
  	var rgb = "rgb(" + Math.round(red) + "," + Math.round(blue) + "," + Math.round(green) + ")";
	console.log(rgb);

  	$("#wrapper").css("background-color", rgb);
	$("#colorful-text").text(rgb);
});


