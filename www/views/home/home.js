'Use Strict';
angular.module('pselines').controller('homeController', function ($scope, $state,$cordovaOauth, $localStorage, $location,$http,$ionicPopup, $firebaseObject, Auth, FIREBASE_URL, Utils) {
  var ref = new Firebase(FIREBASE_URL);

  $scope.logOut = function () {
      Auth.logout();
      $location.path("/login");
  }

}
);
