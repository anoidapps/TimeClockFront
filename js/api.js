var api = {

    //Change this IP address to whereever your flask app is running
    apiAddress: "http://192.168.1.100:5000",

    apiCallSend: function (url, method, data, callback){
        console.log("apiCall - POST: " + JSON.stringify(data));
        $.ajax({
            url: url,
            method: method,
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(data),
            success: function(response){
                callback(response)
            }
        });
    },
    
    apiCall: function(url, method, callback){
        $.ajax({
            url: url,
            method: method,
            success: function(response){
                callback(response)
            }
        });
    },
    
    createUser: function(user, callback){
        var url = this.apiAddress + "/users"
        this.apiCallSend(url, "POST", user, callback);
    },
    
    updateUser: function(user, callback){
        var url = this.apiAddress + "/users/"+user.userId;
        this.apiCallSend(url, "PUT", user, callback);
    },
    
    getUser: function(userId, callback){
        var url = this.apiAddress + "/users/" + userId;
        this.apiCall(url, "GET", callback);
    },
    
    getUsers: function(orgId, callback){
        var url = this.apiAddress + "/users?org-id="+orgId;
        this.apiCall(url, "GET", callback);
    },
    
    createOrg: function(org, callback){
        var url = this.apiAddress + "/organizations"
        this.apiCallSend(url, "POST", org, callback);
    },
    
    getOrg: function(orgId, callback){
        var url = this.apiAddress + "/organizations/" + orgId;
        this.apiCall(url, "GET", callback);
    },
    
    getOrgs: function(callback){
        var url = this.apiAddress + "/organizations";
        this.apiCall(url, "GET", callback);
    },

    createJob: function(job, callback){
        var url = this.apiAddress + "/jobs"
        this.apiCallSend(url, "POST", job, callback);
    },
    
    getJob: function(jobId, callback){
        var url = this.apiAddress + "/jobs/" + jobId;
        this.apiCall(url, "GET", callback);
    },
    
    getJobs: function(orgId, callback){
        var url = this.apiAddress + "/jobs?org-id="+orgId;
        this.apiCall(url, "GET", callback);
    },

    createEntry: function(job, callback){
        var url = this.apiAddress + "/entries"
        this.apiCallSend(url, "POST", job, callback);
    },
    
    getEntry: function(entryId, callback){
        var url = this.apiAddress + "/entries/" + entryId;
        this.apiCall(url, "GET", callback);
    },
    
    getEntries: function(userId, callback){
        var url = this.apiAddress + "/entries?user-id="+userId;
        this.apiCall(url, "GET", callback);
    }

}