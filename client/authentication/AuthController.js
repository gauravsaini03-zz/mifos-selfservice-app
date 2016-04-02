angular.module('Mifos_Self_Service')

.controller('LoginCtrl', ['$scope', '$rootScope', '$state','$mdToast', 'AUTH_EVENTS', 'AuthService', LoginCtrl]);

function LoginCtrl($scope, $rootScope, $state,$mdToast, AUTH_EVENTS, AuthService) {

  var vm        = this;
  vm.loginData  = {};
  vm.doLogin    = doLogin;

  function doLogin() {
    AuthService.doLogin(vm.loginData).save().$promise.then(function(result) {
        AuthService.setUser(result);
        $mdToast.show(
          $mdToast.simple()
            .content("Successful Login")
            .hideDelay(2000)
            .position('top right')
        );
        $state.go("clients");
    });
  }
  
}

 