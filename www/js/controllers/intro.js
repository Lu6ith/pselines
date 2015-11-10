var mod = angular.module('pselines.controllers.intro', []);

mod.controller('IntroCtrl', function ($scope, $state, UserService) {

	$scope.loggingIn = false;

	$scope.login = function () {
		if (!$scope.loggingIn) {
			$scope.loggingIn = true;
			UserService.loginUser().then(function () {
					$scope.loggingIn = false;
			    $state.go('app.searchlines');
		   });
		}
	}
});
