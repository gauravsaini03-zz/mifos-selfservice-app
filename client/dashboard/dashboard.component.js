angular.module('Mifos_Self_Service').directive('dashboard', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/dashboard/dashboard.html',
    controller: 'DashboardController',
    controllerAs: 'DashboardCtrl'
  }
});