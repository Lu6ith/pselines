var mod = angular.module('pselines.services.showlinesService', []);


mod.service('ShowLinesService', function ($q, $firebaseArray, FIREBASE_URL) {

	var self = {
		getLine: function (lineId) {
			return _.findWhere(self.lines, {"id": lineId});
		},
		lines: [],
    getLines: function (){
      //console.log("Loading data for lines ");
      var deferred = $q.defer();

      var messagesRef = new Firebase(FIREBASE_URL);
      var query = messagesRef
        .child("lines")
        .orderByChild("id")
        //.equalTo($scope.showId)
        .limitToLast(200);

      self.lines = $firebaseArray(query);
      self.lines.$loaded().then(function (data){
        //console.log("AngularFire $loaded - ", self.lines);
        deferred.resolve();
      });
      return deferred.promise;
    }

	};
  self.getLines();
	return self;
});
