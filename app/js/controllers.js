'use strict';

/* Controllers */

var appIndex = angular.module('appIndex', []);


appIndex.controller('AppListCtrl', function($scope) {
  $scope.apps = [{
    'name': 'Business Central 6.3.0 ER1',
    'uri': 'http://apps.justinholmes.co:8630/business-central',
    'notes': 'Environment for Business Automation Solution Development'
  }, {
    'name': 'KIE Server 6.3.0 ER1',
    'uri': 'http://apps.justinholmes.co:8630/kie-server/services/rest/server',
    'notes': ''
  }, {
    'name': 'Dashbuilder 6.3.0 ER1',
    'uri': 'http://apps.justinholmes.co:8630/dashbuilder',
    'notes': ''
  },{
    'name': 'Business Central 6.2.1',
    'uri': 'http://apps.justinholmes.co:8621/business-central',
    'notes': ''
  }, {
    'name': 'KIE Server 6.2.1',
    'uri': 'http://apps.justinholmes.co:8621/kie-server/services/rest/server',
    'notes': ''
  }, {
    'name': 'Dashbuilder 6.2.1',
    'uri': 'http://apps.justinholmes.co:8621/dashbuilder',
    'notes': ''
  },{
    'name': 'Business Central 6.1.5',
    'uri': 'http://apps.justinholmes.co:8615/business-central',
    'notes': ''
  }, {
    'name': 'KIE Server 6.1.5',
    'uri': 'http://apps.justinholmes.co:8615/kie-server/services/rest/server',
    'notes': ''
  }, {
    'name': 'Dashbuilder 6.1.5',
    'uri': 'http://apps.justinholmes.co:8615/dashbuilder',
    'notes': ''
  },{
    'name': 'Business Central 6.2.2',
    'uri': 'http://apps.justinholmes.co:8080/business-central',
    'notes': 'Environment for Nick Balkissoon and David van Balen'
  },{
    'name': 'Business Central 6.3.0 ER1',
    'uri': 'http://10.3.11.245:8080/business-central',
    'notes': 'Alex Jurcenko\'s sandbox'
  }, {
    'name': 'KIE Server 6.3.0 ER1',
    'uri': 'http://10.3.11.245:8080/kie-server/services/rest/server',
    'notes': 'Alex Jurcenko\'s sandbox'
  }, {
    'name': 'Dashbuilder 6.3.0 ER1',
    'uri': 'http://10.3.11.245:8080/dashbuilder',
    'notes': 'Alex Jurcenko\'s sandbox'
  }];
});