var api = {

    apiAddress: "http://localhost:5000",

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
        apiCall(url, "POST", org, callback);
    },
    
    updateUser: function(user, callback){
        var url = this.apiAddress + "/users/"+user.userId;
        apiCall(url, "POST", org, callback);
    },
    
    getUser: function(userId, callback){
        var url = this.apiAddress + "/users/" + userId;
        apiCall(url, "GET", callback);
    },
    
    getUsers: function(orgId, callback){
        var url = this.apiAddress + "/users"
        apiCall(url, "GET", callback);
    },
    
    createOrg: function(org, callback){
        var url = this.apiAddress + "/orgs"
        apiCall(url, "POST", org, callback);
    },
    
    getOrg: function(orgId, callback){
        var url = this.apiAddress + "/orgs/" + orgId;
        apiCall(url, "GET", callback);
    },
    
    getOrgs: function(callback){
        var url = this.apiAddress + "/orgs";
        apiCall(url, "GET", callback);
    }

}