var mod = angular.module('pselines.controllers.showline', []);



mod.controller('ShowLineCtrl', function ($scope,
                                     $stateParams,
                                     $firebaseArray,
                                     $ionicScrollDelegate,
                                         $ionicPopup,
                                     ShowLinesService,
                                     FIREBASE_URL,
                                     UserService) {

	$scope.user = UserService;

  $scope.lineId = $stateParams.lineId;
  $scope.line = ShowLinesService.getLine($scope.lineId);
  console.log($scope.line);

	$scope.data = {
		params: [],
		loading: true,
		showInfo: false
	};

	var lineparamsRef = new Firebase(FIREBASE_URL);

	$scope.loadLineparams = function () {
    //console.log("Loading data for line ", $scope.line.id);

    var query = lineparamsRef
      .child("linespec")
      .orderByChild("stacja")
      .equalTo($scope.lineId)
      .limitToLast(200);

    $scope.data.params = $firebaseArray(query);
    $scope.data.params.$loaded().then(function (data){
      console.log("AngularFire $loaded", $scope.data.params);
      $scope.data.loading = false;
      $ionicScrollDelegate.$getByHandle('show-page').scrollBottom(true);
    })
	};

  $scope.loadLineparams();

  $scope.showSsin = function(lineId) {
    //$scope.data = {};

    if (!$scope.data.params[0].linie[2]) {
      var alertPopup = $ionicPopup.alert({
        title: "Brak danych WWW",
        template: "<p class='text-center'>Nie ma danych SSiN dla stacji!<br/>Stacja nie jest podłączona do węzła WAN BB.</p>",
        okText: "OK",
        okType: "button-balanced"
      });

    } else {
      var customPopup = $ionicPopup.show({
        title: 'Parametry WWW dla ' + $scope.lineId,
        template: '<b>WWW Url:  </b><span class="item-note">' + $scope.data.params[0].linie[2].adresrtu[0].adres + '</span><br/>' +
                  '<b>Login:    </b><span class="item-note">' + $scope.data.params[0].linie[2].adresrtu[0].login + '</span><br/>' +
                  '<b>Hasło:    </b><span class="item-note">' + $scope.data.params[0].linie[2].adresrtu[0].passwd + '</span><br/>' +
                  '<hr>' +
                  '<b>KP/L1:  </b><span class="item-note">' + $scope.data.params[0].linie[2].iec[0].adres + '</span><br/>' +
                  '<b>KR/L1:  </b><span class="item-note">' + $scope.data.params[0].linie[2].iec[1].adres + '</span><br/>',
        subTitle: 'Logowanie do SSiN i kanały IEC-104',
        scope: $scope,
        buttons: [{
          text: 'OK',
          type: 'button-positive',
        }]
      });
    }
    ;
  }

	//console.log("ShowCtrl-Created");

	$scope.$on("$ionicView.enter", function () {
		console.log("ShowCtrl-Enter");
	});

	$scope.$on("$ionicView.beforeLeave", function () {
		console.log("ShowCtrl-Leave");
	});

});
