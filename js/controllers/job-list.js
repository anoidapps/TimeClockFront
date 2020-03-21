//on page load
$( document ).ready(function() {

    //get the org id from query parameter
    var orgId = util.getParameterByName("org-id");
    if(orgId){
        //add org id to the button link
        document.getElementById("btnAddJob").setAttribute("href", "job-form.html?org-id="+orgId);
        //get all jobs by org id on page load
        api.getJobs(orgId, function(response){
            console.log(response)
            var jobs = JSON.parse(response);
            var html = "<ul>";
            //loop through the response and build the list of orgs
            for(var i=0; i<jobs.length; i++){
                html += "<li><a href=\"job-home.html?job-id="+jobs[i].job_id+"\">" + jobs[i].name+"</a></li>";
            }
            html += "</ul>";
            //show the list in the div placeholder
            document.getElementById("container").innerHTML = html;
        });
    }

});