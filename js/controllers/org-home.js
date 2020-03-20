//on page load
$( document ).ready(function() {

    //get the org id from query parameter
    var orgId = util.getParameterByName("org-id");
    if(orgId){
        //call the api to get the org by id
        api.getOrg(orgId, function(response){
            var org = JSON.parse(response);
            //set the org name
            document.getElementById("titleOrgName").innerHTML = org.name;
            //set the org id on the button links
            document.getElementById("btnJobs").setAttribute("href", "job-list.html?org-id="+orgId);
            document.getElementById("btnUsers").setAttribute("href", "user-list.html?org-id="+orgId);
        });
    }

});