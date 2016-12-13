$("button").on("click", function(){
	var name = $("input").val();
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + name + "&units=imperial&apikey=abfcfb1c87166f0a43d50ee0af8bcbad", function(data) {
  console.log(data);
  var icon = data["weather"][0]["icon"]
  $("span.temperature").text(data["main"]["temp"]);
  $("img.icon").attr("src","http://openweathermap.org/img/w/" + icon + ".png");
  $("span.temperature-min").text(data["main"]["temp_min"]);
});
})
