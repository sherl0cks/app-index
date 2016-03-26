'use strict';

/* Controllers */

var appIndex = angular.module('appIndex', []);


appIndex.controller('AppListCtrl', function($scope, $http) {
    $http.get('http://apps.justinholmes.co/mongo/apps/apps/56f5618ea94bba245f723743').success(function(data) {
    $scope.apps = data.apps;
  });
});