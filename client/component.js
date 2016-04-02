angular.module('Mifos_Self_Service').directive('mifos', function () {
  return {
    restrict: 'E',
    templateUrl: () => {
      if (Meteor.isCordova) {
        return '/packages/hybrid-app/home.html';
      }
      else {
        return '/packages/web-app/main/home.html';
      }
    },
    controllerAs: 'vm',
    controller: function ($scope, $reactive) {
      
    }
  }
});