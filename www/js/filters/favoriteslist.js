var mod = angular.module('pselines.filters.favorites', []);

mod.filter('sortByName', function() {
  return function(input) {
	  if (input) {
			return _.sortBy(_.values(input), 'name');
	  } else {
		  return []
	  }
  };
});
