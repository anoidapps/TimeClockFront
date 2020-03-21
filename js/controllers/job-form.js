//on page load
$( document ).ready(function() {

    //bind submit button action
    $("#btnSubmit").click(function(){
      //get the org id from query parameter
      var orgId = util.getParameterByName("org-id");
      var txtJobName = document.getElementById("txtJobName").value;
      var txtJobDesc = document.getElementById("txtJobDesc").value;
      var txtJobLocation = document.getElementById("txtJobLocation").value;
      var job = {"name": txtJobName, "description": txtJobDesc, "address": txtJobLocation, "org_id": orgId};
      console.log("createJob: " + JSON.stringify(job));
      //call the api to create the job
      api.createJob(job, function(response){
        console.log(response);
        alert("Job has been created.");
        //redirect to the job list
        window.location.replace("job-list.html?org-id="+orgId);
      });

    });

});