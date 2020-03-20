//on page load
$( document ).ready(function() {

    //get the org id from query parameter
    var orgId = util.getParameterByName("org-id");
    if(orgId){
        //call the api to get the org by id
        api.getOrg(orgId, function(response){
            var org = JSON.parse(response);
            document.getElementById("titleOrgName").innerHTML = org.name;
        });
    }

});