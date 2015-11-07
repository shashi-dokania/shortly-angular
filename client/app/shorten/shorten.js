angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    Links.addLinks($scope.linkName).then(function (resp) {
      return resp.data;
    })
  }

});
