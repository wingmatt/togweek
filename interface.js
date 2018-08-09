//
$(document).ready(function() {
    $(".toggl-start").click(function () {
        $(this).toggle(false);
        $(this).siblings(".toggl-stop").toggle(true);
    });
    //
    $(".toggl-stop").click(function () {
        $(this).toggle(false);
        $(this).siblings(".toggl-start").toggle(true);
    });
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
	/*
    Vue.http.post('twUrl',this.object).then(function(response) {
        //Success
        console.log(response.data)
    }, function(response) {
		//Error
        console.log(response.data)
	});
	*/

// Get details from Toggl on pageload
	// Check if any timers are running. Do they match any projects?
	// If projects match, hide toggl-start and show toggl-stop for matched project

// Display response from teamweek

// Choose text color based on BG hex code


Vue.component('task', {
	props: {
		task: Object
	},
	template: `
	<li id="task-3" class="task" v-bind:style="{ borderLeftColor: task.color}">
		<div class="teamweek"><h2 class="teamweek-task-title" >{{task.name}}</h2>
			<h3 class="teamweek-project">{{task.project.name}}</h3></div>
		<i class="toggl toggl-start fas fa-play-circle fa-2x"></i>
		<i style="display:none" class="toggl toggl-stop fas fa-pause-circle fa-2x"></i>
	</li>
	`
});
var app = new Vue({
  el: '#task-list',
  data: {
  		tasks
	}
});