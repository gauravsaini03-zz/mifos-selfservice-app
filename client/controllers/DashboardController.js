angular.module("Mifos_Self_Service")
.controller("DashboardController", ['$scope', '$rootScope', '$state', 'AuthService', DashboardController]);
function DashboardController($scope, $rootScope, $state, AuthService) {
  var ctrl = this;
  ctrl.userData = AuthService.getUser();
  ctrl.fetchClients = (function() {
    AuthService.fetchClients().get().$promise.then(function(result) {
      AuthService.setClients(result);
      console.log( AuthService.getClients());
      ctrl.clientsData = AuthService.getClients();
    });
  })();
  ctrl.dashboardOptions = [
    "Client's List",
    "View Deposit",
    "View Loans",
    "Recent Transactions",
    "Request for new loan",
    "Request for loan pre-payment",
    "MFI or NBFC Details"
  ];
}