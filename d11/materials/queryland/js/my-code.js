console.log("Hello");



$("button").on("click", function() {
  var title = $("input").val();
  $("h1").text(title);
  $("p").css("color","red");
  $("p.awesome").css("background-color", "purple");
});