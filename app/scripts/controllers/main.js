'use strict';

angular.module('firebaseIntroApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var fire = new Firebase('https://devmountain.firebaseio.com/');
    $scope.comments = $firebase(fire);
    $scope.username = "Houston";
    $scope.addComment = function(e){
    	if(e.keyCode !== 13){
    		return;
    	}
    	$scope.comments.$add({
    		username: $scope.username,
    		body: $scope.commentText
    	});
    }
  });
