//
$(".toggl-start").click(function(){
	$(this).toggle(false);
	$(this).siblings(".toggl-stop").toggle(true);
});
//
$(".toggl-stop").click(function(){
	$(this).toggle(false);
	$(this).siblings(".toggl-start").toggle(true);
});
//
$(".todo").click(function(){
	console.log($(this).find("[type=checkbox]")[0].checked);
	if ($(this).find("[type=checkbox]")[0].checked) {
		$(this).addClass("done");
		console.log('DONE');
	} else {
		$(this).removeClass("done");
		console.log('UNDONE');
	}
});
// Get details from teamweek on pageload

// Get details from Toggl on pageload

// Display response from teamweek

// Display response from Toggl

// Choose text color based on BG hex code


// Choose text color based on hex code, return light or dark hex code
function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
    darkColor : lightColor;
}