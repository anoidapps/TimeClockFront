//on page load
$( document ).ready(function() {

    //bind submit button action
    $("#btnSubmit").click(function(){

      var txt = document.getElementById("txtOrgName").value;
      var org = {"name": txt};
      console.log("createOrg: " + JSON.stringify(org));
      //call the api to create the org
      api.createOrg(org, function(response){
        console.log(response);
        alert("Organization has been created.");
        //redirect to the org list
        window.location.replace("org-list.html");
      });

    });

});