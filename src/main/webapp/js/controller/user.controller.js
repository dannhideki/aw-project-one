app.controller('userController', [
    '$scope', 'userService',
    function ($scope, userService) {
        var vm = this;
        vm.users = [];
        vm.user={id:null, name:'',address:'',email:''};
     
        vm.submit = submit;
        vm.edit = edit;
        vm.remove = remove;
        vm.reset = reset;
        
        listAllUsers();
        function listAllUsers(){
        		userService.listAllUsers()
                .then(
                function(d) {
                    vm.users = d;
                },
                function(errResponse){
                    console.error('Error while fetching Users');
                }
            );
        }
        
        function createUser(user){
            userService.createUser(user)
                .then(
                		listAllUsers,
                function(errResponse){
                    console.error('Error while creating User');
                }
            );
        }
        
        function updateUser(user, id){
        		userService.updateUser(user, id)
                .then(
                		listAllUsers,
                function(errResponse){
                    console.error('Error while updating User');
                }
            );
        }
        
        function deleteUser(id){
            userService.deleteUser(id)
                .then(
                		listAllUsers,
                function(errResponse){
                    console.error('Error while deleting User');
                }
            );
        }
     
        function submit() {
            if(vm.user.id===null){
                console.log('Saving New User', vm.user);
                createUser(vm.user);
            }else{
                updateUser(vm.user, vm.user.id);
                console.log('User updated with id ', vm.user.id);
            }
            reset();
        }
     
        function edit(id){
            console.log('id to be edited', id);
            for(var i = 0; i < vm.users.length; i++){
                if(vm.users[i].id === id) {
                    vm.user = angular.copy(vm.users[i]);
                    break;
                }
            }
        }
     
        function remove(id){
            console.log('id to be deleted', id);
            if(vm.user.id === id) {
                reset();
            }
            deleteUser(id);
        }
     
        function reset(){
            vm.user={id:null, name:'', address:'', email:''};
            $scope.myForm.$setPristine();
        }
    }
]);