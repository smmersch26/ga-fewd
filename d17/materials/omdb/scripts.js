$("button").on("click", function(){
	var name = $("input").val();
	var liThatIMade = $("<li>" + name + "</li>");
	$.getJSON("https://www.omdbapi.com/?t=" + name + "", function(data) {
	  console.log(data);
	  $("h1.title").text(data["Title"] + " (" + data["Rated"] + ")");
	  $("h4.year").text(data["Year"]);
	  $("img.poster").attr("src", data["Poster"]);
	  $("p.plot").text(data["Plot"]);
	});
	$("ul").append(liThatIMade);
})