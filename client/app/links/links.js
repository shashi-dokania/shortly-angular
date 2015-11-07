angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  console.log(Links);
  // Your code here
  $scope.data = {
    links: []
  };
  $scope.getLinks = function() {
    // $scope.data.links = Links.getLinks();
    Links.getLinks().then(function (resp) {
      $scope.data.links = resp.data;
    })
  };

  $scope.getLinks();
});
