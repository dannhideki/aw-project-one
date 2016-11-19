app.factory('userService', function($http, $q) {
	var URI = "http://localhost:8081/aw-project-one/user/";
	var service = {
			listAllUsers: listAllUsers,
			createUser: createUser,
			updateUser:updateUser,
	        deleteUser:deleteUser
	};

	return service;

	function listAllUsers(){
		var deferred = $q.defer();
		$http.get(URI)
		.then(
				function (response) {
					deferred.resolve(response.data);
				},
				function(errResponse){
					console.error('Error while fetching Users');
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}

	function createUser(user) {
		var deferred = $q.defer();
		$http.post(URI, user)
		.then(
				function (response) {
					deferred.resolve(response.data);
				},
				function(errResponse){
					console.error('Error while creating User');
					deferred.reject(errResponse);
				}
		);
		return deferred.promise;
	}
 
    function updateUser(user, id) {
        var deferred = $q.defer();
        $http.put(URI+id, user)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while updating User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
 
    function deleteUser(id) {
        var deferred = $q.defer();
        $http.delete(URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while deleting User');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

});