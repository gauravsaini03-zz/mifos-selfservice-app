angular.module('Mifos_Self_Service').directive('login', function() {
  return {
    restrict: 'E',
    templateUrl: 'client/login/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'vm'
  }
})