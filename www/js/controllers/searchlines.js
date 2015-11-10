var mod = angular.module('pselines.controllers.searchlines', []);

mod.controller('SearchLinesCtrl', function($scope, $state, $stateParams, $ionicListDelegate, ShowLinesService, UserService) {

	$scope.search = {
		'line':''
	};

    $scope.showLinesService = ShowLinesService;
    //$scope.showLinesService.getLines();
    console.log('SearchLineCtrl: ', $scope.showLinesService.lines);

	$scope.user = UserService;

  /*$ionicModal.fromTemplateUrl('templates/my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });

  $scope.openModal = function() {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };*/

});
