angular.module('Mifos_Self_Service').directive('mifos', function () {
  return {
    restrict: 'E',
    templateUrl: () => {
      if (Meteor.isCordova) {
        return '/packages/hybrid-app/main.html';
      }
      else {
        return '/packages/web-app/main.html';
      }
    },
    controllerAs: 'vm',
    controller: function ($scope, $reactive) {
      
    }
  }
});