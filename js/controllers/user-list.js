//on page load
$( document ).ready(function() {

    //get the org id from query parameter
    var orgId = util.getParameterByName("org-id");
    if(orgId){
        //get all users by org id on page load
        api.getUsers(orgId, function(response){
            console.log(response)
            var users = JSON.parse(response);
            var html = "<ul>";
            //loop through the response and build the list of orgs
            for(var i=0; i<users.length; i++){
                html += "<li><a href=\"user-home.html?user-id="+users[i].user_id+"\">" + users[i].first_name+" " + users[i].first_name + "</a></li>";
            }
            html += "</ul>";
            //show the list in the div placeholder
            document.getElementById("container").innerHTML = html;
        });

        document.getElementById("btnAdd").setAttribute("href", "user-form.html?org-id="+orgId);
    }

});