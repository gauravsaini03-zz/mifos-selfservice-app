angular.module('Mifos_Self_Service')
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider, USER_ROLES) {
    $locationProvider.html5Mode(true);

    $stateProvider
      // .state('app', {
      //   url: '/app',
      //   abstract: true,
      //   //templateUrl: 'app/components/common/main.html',
      //   templateUrl: () => {
      //     if (Meteor.isCordova) {
      //       return '/packages/hybrid-app/main.html';
      //     }
      //     else {
      //       return '/packages/web-app/auth/login.html';
      //     }
      //   },
      //   controller: 'MainCtrl',
      //   controllerAs: 'vm'
      // })
      .state('dashboard', {
        url: '/dashboard',
        //templateUrl: 'app/components/common/dashboard.html',
        templateUrl: () => {
          if (Meteor.isCordova) {
            return '/packages/hybrid-app/misc/dashboard.html';
          }
          else {
            return '/packages/web-app/misc/dashboard.html';
          }
        },
        controller: 'MainCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Profile',
          authorizedRoles: [USER_ROLES.user]
        }
      })
      .state('clients', {
        url: '/clients',
        //templateUrl: 'app/components/client/clients.html',
        templateUrl: () => {
          if (Meteor.isCordova) {
            return '/packages/hybrid-app/clients/clients.html';
          }
          else {
            return '/packages/web-app/clients/clients.html';
          }
        },
        controller: 'ClientCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Clients',
          authorizedRoles: [USER_ROLES.user]
        }
      })
      .state('viewclient', {
        url: '/viewclient/:clientId',
        templateUrl: () => {
          if (Meteor.isCordova) {
            return '/packages/hybrid-app/clients/viewclient.html';
          }
          else {
            return '/packages/web-app/clients/viewclient.html';
          }
        },
        controller: 'ViewClientCtrl',
        controllerAs: 'vm',
        data: {
          title: 'View Client',
          authorizedRoles: [USER_ROLES.user]
        }
      })
      .state('login', {
        url: '/login',
        templateUrl: () => {
          if (Meteor.isCordova) {
            return '/packages/hybrid-app/auth/login/login.html';
          }
          else {
            return '/packages/web-app/auth/login.html';
          }
        },
        controller: 'LoginCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Login'
        }
      });

    $urlRouterProvider.otherwise("/login");
  })
  // .run(function ($rootScope, $state) {
  //   $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
  //     if (error === 'AUTH_REQUIRED') {
  //       $state.go('parties');
  //     }
  //   });
  // });