//on page load
$( document ).ready(function() {

    //get the org id from query parameter
    var orgId = util.getParameterByName("org-id");

    //bind submit button action
    $("#btnSubmit").click(function(){
      var txtEmail = document.getElementById("txtEmail").value;
      var txtUsername = document.getElementById("txtUsername").value;
      var txtPassword = document.getElementById("spanTempPassword").innerHTML;
      var txtSalt = util.randomStr(10);
      var txtFirstName = document.getElementById("txtFirstName").value;
      var txtLastName = document.getElementById("txtLastName").value;
      var txtPhone = document.getElementById("txtPhone").value;
      var chkAdmin = document.getElementById("chkAdmin").checked;
      var user = {
        "email": txtEmail,
        "username": txtUsername, 
        "password": txtPassword, 
        "salt": txtSalt, 
        "first_name": txtFirstName, 
        "last_name": txtLastName, 
        "phone": txtPhone, 
        "admin": chkAdmin,
        "org_id": orgId
      };
      console.log("createUser: " + JSON.stringify(user));
      //call the api to create the job
      /*
      api.createJob(job, function(response){
        console.log(response);
        alert("Job has been created.");
        //redirect to the job list
        window.location.replace("job-list.html?org-id="+orgId);
      });*/

    });

    $("#btnGenerate").click(function(){
        var password = util.randomStr(10);
        document.getElementById("spanTempPassword").innerHTML = password;
    });

    //set the cancel button link
    document.getElementById("btnCancel").setAttribute("href", "user-list.html?org-id="+orgId);

    //generate a random password. The user will reset it after first login
    var password = util.randomStr(10);
    document.getElementById("spanTempPassword").innerHTML = password;
});