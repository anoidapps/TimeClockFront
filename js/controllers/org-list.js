//on page load
$( document ).ready(function() {

    //get all organizations on page load
    api.getOrgs(function(response){
      
      console.log(response)
      var orgs = JSON.parse(response);
      var html = "<ul>";
      //loop through the response and build the list of orgs
      for(var i=0; i<orgs.length; i++){
        html += "<li><a href=\"org-home.html?org-id="+orgs[i].org_id+"\">" + orgs[i].name+"</a></li>";
      }
      html += "</ul>";
      //show the list in the div placeholder
      document.getElementById("container").innerHTML = html;
    });

});