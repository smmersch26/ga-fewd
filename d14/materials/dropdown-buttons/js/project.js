$("button").on("click", function(){
	$(this).siblings(".option").toggle();
});

$("button").on("blur", function() {
	$(".option").hide();
});

// $(".dropdown").on("mouseleave", function(){
// 	$(".option").hide();
// });