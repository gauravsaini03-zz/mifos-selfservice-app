(function(){

  angular.module('Mifos_Self_Service.web')
    .controller('MainCtrl', ['navService', '$mdSidenav', '$mdBottomSheet', '$log', '$q', '$state', '$mdToast', '$scope','AuthService', MainCtrl]);

  function MainCtrl(navService, $mdSidenav, $mdBottomSheet, $log, $q, $state, $mdToast, $scope, AuthService) {
    var vm = this;
    $scope.test = "dsadasdasdasd"
    vm.menuItems = [ ];
    vm.selectItem = selectItem;
    vm.toggleItemsList = toggleItemsList;
    vm.showActions = showActions;
    //console.log($state.current.data)
    //vm.title = $state.current.data.title;
    vm.title = "=test"
    vm.showSimpleToast = showSimpleToast;
    vm.toggleRightSidebar = toggleRightSidebar;

    vm.userDetails = AuthService.getUser();
    //console.log(AuthService.getUser());
    console.log("====");
    navService.loadAllItems().then(function(menuItems) {
        vm.menuItems = [].concat(menuItems);
        console.log("==vm.menuItems==",vm.menuItems)

    });

    function toggleRightSidebar() {
      $mdSidenav('right').toggle();
    }

    function toggleItemsList() {
      var pending = $mdBottomSheet.hide() || $q.when(true);

      pending.then(function(){
        $mdSidenav('left').toggle();
      });
    }

    function selectItem (item) {
      vm.title = item.name;
      vm.toggleItemsList();
      vm.showSimpleToast(vm.title);
    }

    function showActions($event) {
      $mdBottomSheet.show({
        parent: angular.element(document.getElementById('content')),
        templateUrl: 'app/views/partials/bottomSheet.html',
        controller: [ '$mdBottomSheet', SheetController],
        controllerAs: "vm",
        bindToController : true,
        targetEvent: $event
      }).then(function(clickedItem) {
        clickedItem && $log.debug( clickedItem.name + ' clicked!');
      });

      function SheetController( $mdBottomSheet ) {
        var vm = this;

        vm.actions = [
          { name: 'Share', icon: 'share', url: 'https://twitter.com/intent/tweet?text=Angular%20Material%20Dashboard%20https://github.com/flatlogic/angular-material-dashboard%20via%20@flatlogicinc' },
          { name: 'Star', icon: 'star', url: 'https://github.com/flatlogic/angular-material-dashboard/stargazers' }
        ];

        vm.performAction = function(action) {
          $mdBottomSheet.hide(action);
        };
      }
    }

    function showSimpleToast(title) {
      $mdToast.show(
        $mdToast.simple()
          .content(title)
          .hideDelay(2000)
          .position('bottom right')
      );
    }

    $scope.logout = function() {
      localStorage.clear();
      $state.go("login");
      window.location.reload();
    }

  }

})();