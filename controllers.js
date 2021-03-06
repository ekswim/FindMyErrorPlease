angular.module('songhop.controllers', ['ionic', 'songhop.services'])


/*
Controller for the discover page
*/
.controller('DiscoverCtrl', function($scope, $timeout, User, Recommendations) {
  Recommendations.getNextSongs()
  .then(function() {
	  $scope.currentSong = Recommendations.queue[0];
  })
  
  $scope.sendFeedback = function(bool) {
	  if (bool) User.addSongToFavorites($scope.currentSong);
	  $scope.currentSong.rated = bool;
	  $scope.currentSong.hide = true;
	  
	  Recommendations.nextSong();
	  
	$timeout(function() {
	  
	  $scope.currentSong = Recommendations.queue[0];
	  
	}, 250);
	
  }
})


/*
Controller for the favorites page
*/
.controller('FavoritesCtrl', function($scope, User) {
	$scope.favorites = User.favorites;
	
	$scope.removeSong = function(song, index) {
		User.removeSongFromFavorites(song, index);
	}
})


/*
Controller for our tab bar
*/
.controller('TabsCtrl', function($scope) {

});
