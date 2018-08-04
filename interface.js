$(".toggl-start").click(function(){
	$(this).toggle(false);
	$(this).siblings(".toggl-stop").toggle(true);
});
$(".toggl-stop").click(function(){
	$(this).toggle(false);
	$(this).siblings(".toggl-start").toggle(true);
});
$(".todo").click(function(){
	console.log($(this).find("[type=checkbox]").checked);
	if ($(this.find("[type=checkbox]").checked)) {
		$(this).addClass("done");
		console.log('DONE');
	} else {
		$(this).removeClass("done");
		console.log('UNDONE');
	}
});