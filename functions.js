//Display current date
$(document).ready(function(){
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var today  = new Date();
	$("#time").text(today.toLocaleDateString("en-US", options));
});
// Get list of Teamweek tasks
/*---
https://teamweek.com/api/v4/1/tasks/timeline?since=&until=&users=&projects=&tasks=&group=
---*/
function fetchTeamweek(auth){

}

/* --REFERENCE--
// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
var jqxhr = $.post( "example.php", function() {
  alert( "success" );
})
  .done(function() {
    alert( "second success" );
  })
  .fail(function() {
    alert( "error" );
  })
  .always(function() {
    alert( "finished" );
  });
 
// Perform other work here ...
 
// Set another completion function for the request above
jqxhr.always(function() {
  alert( "second finished" );
});
*/