$(".toggl-start").click(function(){
	$(this).toggle(false);
	$(this).siblings(".toggl-stop").toggle(true);
});
$(".toggl-stop").click(function(){
	$(this).toggle(false);
	$(this).siblings(".toggl-start").toggle(true);
});