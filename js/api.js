var api = {

    apiAddress: "http://192.168.1.121:5000",

    apiCall: function (url, method, data, callback){
        $.ajax({
            url: url,
            method: method,
            data: data,
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
        this.apiCall(url, "POST", org, callback);
    },
    
    updateUser: function(user, callback){
        var url = this.apiAddress + "/users/"+user.userId;
        this.apiCall(url, "POST", org, callback);
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
        var url = this.apiAddress + "/orgs"
        this.apiCall(url, "POST", org, callback);
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