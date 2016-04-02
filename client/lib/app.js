let modulesToLoad =  [
  'angular-meteor',
  'ngAnimate', 
  //'ngCookies',
  'md.data.table', 
  'ngSanitize',
  'ui.router',
  'ngResource',
  'ngMaterial'
];

if (Meteor.isCordova) {
  modulesToLoad = modulesToLoad.concat(['Mifos_Self_Service.app']);
}
else {
  modulesToLoad = modulesToLoad.concat(['Mifos_Self_Service.web']);
}

angular.module('Mifos_Self_Service', modulesToLoad);

angular.module('Mifos_Self_Service').config(($mdIconProvider, $httpProvider) => {
  // $mdIconProvider
  //   .iconSet("social", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg")
  //   .iconSet("action", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-action.svg")
  //   .iconSet("communication", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-communication.svg")
  //   .iconSet("content", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-content.svg")
  //   .iconSet("toggle", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-toggle.svg")
  //   .iconSet("navigation", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-navigation.svg")
  //   .iconSet("image", "/packages/planettraining_material-design-icons/bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-image.svg");

  $httpProvider.defaults.useXDomain = true;
  //Set headers
  $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
  // Mifos set Tenant
  $httpProvider.defaults.headers.common['Fineract-Platform-TenantId'] = 'default';

});

function onReady() {
  angular.bootstrap(document, ['Mifos_Self_Service'], {
    strictDi: true
  });
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);