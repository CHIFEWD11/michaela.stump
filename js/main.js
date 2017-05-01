console.log("please work");

$(".js-hamburger").on("click", function(event) {
	event.preventDefault();
	$(".js-navigation").toggle();
});
