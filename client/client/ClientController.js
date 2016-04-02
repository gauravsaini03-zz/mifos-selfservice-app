angular.module('Mifos_Self_Service')
	.controller('ClientCtrl', ['$scope', '$rootScope', '$location', 'ClientService', ClientCtrl]);

function ClientCtrl($scope, $rootScope, $location, ClientService) {

	var vm 			= this;
	vm.selected 	= [];
	vm.getClients 	= getClients;
	vm.onPaginate 	= onPaginate;
	vm.onReorder 	= onReorder;
	vm.routeTo 		= routeTo;

	vm.query = {
		orderBy: 'displayName',
		limit: 5,
		offset: 0
	};
	
	getClients(vm.query);

	function getClients(query) {
		ClientService.getAllClients().get(vm.query).$promise.then(function(res) {
	    	console.log(res);
			vm.clients = res;
	  	});
	}

	function onPaginate(offset, limit) {
		console.log(offset,"====",limit)
		getClients(angular.extend({}, vm.query, {offset: offset, limit: limit}));
	};

	function onReorder(order) {
		console.log(order,"====")
		getClients(angular.extend({}, vm.query, {order: order}));
	};

	function routeTo(id) {
		$location.path('/viewclient/' + id);
	}
	
  	
}