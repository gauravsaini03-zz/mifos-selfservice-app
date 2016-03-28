(function(){
  'use strict';

    angular.module('Mifos_Self_Service')
        .service('AuthService', ['$q', '$http', '$rootScope', '$resource', 'storageService', 'BASE_URL', 'CLIENT_BASE_URL','USER_ROLES', AuthService]);

    function AuthService($q, $http, $rootScope, $resource, storageService, BASE_URL, USER_ROLES, CLIENT_BASE_URL) {

        var authService     = {},
            role            = '',
            userData        = '',
            clientsData     = '',       
            isAuthenticated = false;


        if (storageService.getObject("user_profile")) {
            isAuthenticated = true;
            role = USER_ROLES.user;
        }

        this.setUser = function (res) {
            storageService.setObject('user_profile', res);
            isAuthenticated = true;
            userData = res;
            role = USER_ROLES.user;
            $http.defaults.headers.common['Authorization'] = 'Basic ' + res.base64EncodedAuthenticationKey;;
        }

        this.setClients = function(result) {
            clientsData = result['pageItems'];
        }

        this.getUser = function() {
            return userData;
        }

        this.getClients = function() {
            return clientsData;
        }

        this.isAuthenticated = function () {
            return isAuthenticated;
        };

        this.role = function () {
            return role;
        };

        this.isAuthorized = function (authorizedRoles) {
            if (!angular.isArray(authorizedRoles)) {
                authorizedRoles = [authorizedRoles];
            }
            return (this.isAuthenticated() && authorizedRoles.indexOf(role) !== -1);
        }

        //Resource for REST APIs
        this.doLogin = function(data) {
            return $resource(BASE_URL+'/self/authentication?tenantIdentifier=default', data);
        }

        this.fetchClients = function() {
            return $resource("https://demo.openmf.org/fineract-provider/api/v1/self/clients?tenantIdentifier=default");
        }

    }

})();