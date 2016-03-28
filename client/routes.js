angular.module('Mifos_Self_Service')
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider, USER_ROLES) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        //templateUrl: 'app/components/common/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .state('dashboard', {
        url: '/dashboard',
        template: '<dashboard></dashboard>',
        data: {
          title: 'Profile',
          authorizedRoles: [USER_ROLES.user]
        }
      })
      .state('app.clients', {
        url: '/clients',
        //templateUrl: 'app/components/client/clients.html',
        controller: 'ClientCtrl',
        controllerAs: 'vm',
        data: {
          title: 'Clients',
          authorizedRoles: [USER_ROLES.user]
        }
      })
      .state('app.viewclient', {
        url: '/viewclient/:clientId',
        //templateUrl: 'app/components/client/viewclient.html',
        controller: 'ViewClientCtrl',
        controllerAs: 'vm',
        data: {
          title: 'View Client',
          authorizedRoles: [USER_ROLES.user]
        }
      })
      .state('login', {
        url: '/login',
        template: '<login></login>',
        data: {
          title: 'Login'
        }
      });

    $urlRouterProvider.otherwise("/login");
  })