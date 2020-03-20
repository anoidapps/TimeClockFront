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
        this.apiCallSend(url, "POST", org, callback);
    },
    
    updateUser: function(user, callback){
        var url = this.apiAddress + "/users/"+user.userId;
        this.apiCallSend(url, "POST", org, callback);
    },
    
    getUser: function(userId, callback){
        var url = this.apiAddress + "/users/" + userId;
        this.apiCall(url, "GET", callback);
    },
    
    getUsers: function(orgId, callback){
        var url = this.apiAddress + "/users"
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
        console.log("getOrgs");
        var url = this.apiAddress + "/organizations";
        this.apiCall(url, "GET", callback);
    }

}