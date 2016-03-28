angular.module("Mifos_Self_Service")
.controller("DashboardController", ['$scope', '$rootScope', '$state', 'AuthService', DashboardController]);
function DashboardController($scope, $rootScope, $state, AuthService) {
  this.userData = AuthService.getUser();
  this.fetchClients = (function() {
    AuthService.fetchClients().get().$promise.then(function(result) {
      AuthService.setClients(result);
      console.log(AuthService.getClients());
    });
  })();
}