//Display current date
$(document).ready(function(){
	var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	var today  = new Date();
	$("#time").text(today.toLocaleDateString("en-US", options));
	//fetchTeamweek(auth);
});
// Get list of Teamweek tasks
/*---
https://teamweek.com/api/v4/1/tasks/timeline?since=&until=&users=&projects=&tasks=&group=
---*/
function fetchTeamweek(auth){
	var taskArray = [];
	var today  = new Date();
	//var getJqxhr = $.get("example-response.json", '', parseTeamweek(response));
	console.log(JSON.stringify(getJqxhr));
	/* When we're doing real stuff:
	var postUrl = "https://teamweek.com/api/v4/1/tasks/timeline?since=" + today + "&until" + today + "&users=ME";
	var jqxhr = $.post( "example.php", function(key, value) {
	  $(rawData).each(parseTeamweek(value));
	  // TODO probs fix
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
}
// Check Teamweek API key and assign it to local storage

// TW Button behavior
$("#fetch-teamweek").click(fetchTeamweek);



/* Example response format---------------------------/

[
  {
    "id": 1,
    "name": "Act like muppet",
    "notes": "must try hard",
    "start_date": "2016-01-01",
    "end_date": "2016-01-01",
    "start_time": "12:00",
    "end_time": "13:00",
    "color": "#db9a9a",
    "color_id": 1,
    "estimated_hours": "3.5",
    "estimated_minutes": "210",
    "done": false,
    "user_id": 1,
    "folder_id": 1,
    "position": 1,
    "weight": 1,
    "project": {
      "id": 1,
      "name": "Quality time",
      "archived": false,
      "color": "#db9a9a",
      "color_id": 1,
      "created_at": "2016-01-01T00:00:00.00Z+00:00",
      "updated_at": "2016-01-01T00:00:00.00Z+00:00"
    },
    "created_at": "2016-01-01T00:00:00.00Z+00:00",
    "updated_at": "2016-01-01T00:00:00.00Z+00:00"
  }
]

----------------------------------------------------*/
// Choose text color based on hex code, return light or dark hex code
function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
    darkColor : lightColor;
}
// Format JSON response. Hoo boy
function parseTeamweek (rawData) {
	for (data in rawData) {

	}
	var name = rawData.name;
	var notes = rawData.notes;
	var color = rawData.color;
	var textColor = pickTextColorBasedOnBgColorSimple(color, '#fff', '#000');
	var projName = rawData.project.name;
	var projColor = rawData.project.color;
	var done = rawData.project.done;
	var user = rawData.user_id;
	console.log("OK");
}
parseTeamweek(jsonData);
// Save entered API keys locally

// Load saved API keys on pageload


// Vue starts here

var app = new Vue({
  el: '#task-list',
  data: {
  	fauxResponse: [
	  {
	    "id": 1,
	    "name": "Act like muppet",
	    "notes": "must try hard",
	    "start_date": "2016-01-01",
	    "end_date": "2016-01-01",
	    "start_time": "12:00",
	    "end_time": "13:00",
	    "color": "#db9a9a",
	    "color_id": 1,
	    "estimated_hours": "3.5",
	    "estimated_minutes": "210",
	    "done": false,
	    "user_id": 1,
	    "folder_id": 1,
	    "position": 1,
	    "weight": 1,
	    "project": {
	      "id": 1,
	      "name": "Quality time",
	      "archived": false,
	      "color": "#db9a9a",
	      "color_id": 1,
	      "created_at": "2016-01-01T00:00:00.00Z+00:00",
	      "updated_at": "2016-01-01T00:00:00.00Z+00:00"
	    },
	    "created_at": "2016-01-01T00:00:00.00Z+00:00",
	    "updated_at": "2016-01-01T00:00:00.00Z+00:00"
	  }
	]
}
})

Vue.component('task', {
	props: ['task'],

})