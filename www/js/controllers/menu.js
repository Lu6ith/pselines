var mod = angular.module('pselines.controllers.menu', []);

mod.controller('MenuCtrl', function($scope, $state, UserService) {

	$scope.user = UserService;

	$scope.logout = function () {
		UserService.logoutUser();
		$state.go('intro');
	};

});
