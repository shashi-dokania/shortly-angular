//var util = require('../../../server/config.utils.js');
var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;

angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = {};

  $scope.addLink = function() {
    // console.log('checking match....', $scope.linkName.match(rValidUrl))
    // console.log('rValidUrl....', rValidUrl);
    // if(!$scope.linkName.match(rValidUrl)) {
    //   console.log($scope.linkName);

    //   console.log('isValid.....');
      // $scope.showErrorMessage = false;
      Links.addLinks($scope.linkName).then(function (resp) {
        return resp.data;
      });
    // } else {
    //   console.log('not valid.......');
    //   $scope.showErrorMessage = true;
    // }
  }

});
