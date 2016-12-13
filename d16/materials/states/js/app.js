var ny = {
  name: "New York",
  capital: "Albany",
  governor: "Andrew Cuomo",
  usSenators: ["Chuck Schumer", "Kirsten Gillibrand"]
}

var ct = {
  name: "Connecticut",
  capital: "Hartford",
  governor: "Dannel Malloy",
  usSenators: ["Richard Blumenthal", "Christopher S. Murphy"]
}

$("button#ct").on("click", function(){
	$("h1").text(ct["name"]);
	$("span.capital").text(ct["capital"]);
	$("span.governor").text(ct["governor"]);
	$("li#first-senator").text(ct["usSenators"][0]);
	$("li#second-senator").text(ct["usSenators"][1]);
});

$("button#ny").on("click", function(){
	$("h1").text(ny["name"]);
	$("span.capital").text(ny["capital"]);
	$("span.governor").text(ny["governor"]);
	$("li#first-senator").text(ny["usSenators"][0]);
	$("li#second-senator").text(ny["usSenators"][1]);
});
