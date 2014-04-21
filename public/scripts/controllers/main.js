'use strict';

var dashMappApp = angular.module('dashMappApp');
dashMappApp.controller('MainCtrl', function ($scope) {
  
  $scope.map = {
    center: {
        latitude: 45,
        longitude: -73
    },
    zoom: 8
	};

});