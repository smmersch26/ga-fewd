// var number = 1

// $("#right").on("click", function(){
// 	number = number + 1
// 	image = $("figure > img").attr("src","img/" + number + ".jpg")
// 	if(number <= 4){
// 		$("#number").text(number);
// 	}else if (number === 5){
// 		number = 1
// 		$("#number").text(number);
// 		$("figure > img").attr("src","img/" + number + ".jpg")
// 	}
// })

// $("#left").on("click", function(){
// 	number = number - 1
// 	image = $("figure > img").attr("src","img/" + number + ".jpg")
// 	if(number === 0){
// 		number = 4
// 		$("#number").text(number);
// 		$("figure > img").attr("src","img/" + number + ".jpg")
// 	}else if(number > 0){
// 		$("#number").text(number);
// 	}
// })

$("#left").on("click", function() {
  var current = $("img.selected")
  var number = parseInt(current.attr("id"));
  current.removeClass("selected");
  if (number === 1) {
    var prev = 4;
  } else {
    var prev = number - 1;
  }
  $("#" + prev).addClass("selected");
  $("span#number").text(prev);
});

$("#right").on("click", function() {
  var current = $("img.selected")
  var number = parseInt(current.attr("id"));
  current.removeClass("selected");
  if (number === 4) {
    var next = 1;
  } else {
    var next = number + 1;
  }
  $("#" + next).addClass("selected");
  $("span#number").text(next);
});