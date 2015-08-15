'use strict';

/**
 * @ngdoc function
 * @name gkTransportUiApp.controller:RestCtrl
 * @description
 * # RestCtrl
 * Controller of the gkTransportUiApp
 */
angular.module('gkTransportUiApp').controller('RestCtrl',['$scope','RestService', function($scope,RestService){
	var Controller= function(){
	var	instance= {
			_getObject: function() {
				return RestService.getObject();
			}
		};
		return {
			getObject: instance._getObject
		};
	};
	angular.extend($scope,Controller());
}]).service('RestService', ['RestResource','$resource','$q',
    function(RestResource,$resource,$q) {
        var instance = {
		  _object : {},
          _getObject: function() {
            return instance._object;
          },
		  
          _init: function() {			  

						//http://rest-service.guides.spring.io/greeting
						//var resource = $resource('http://localhost:8080/greeting');
						//resource.get({}).$promise.then(function(data){
						//	console.log("success");
						//	console.log(data);
						//	instance._object = data;
						//}, function(error){
						//	console.log("failure");
						//	console.log(error);
						//});
						//var deferred = $q.defer();
						RestResource.getObject.query({}).$promise.then(function(data){
							console.log("success");
							//deferred.resolve(data);
							instance._object = data;
						}, function(error){
							console.log("failure");
							//deferred.reject(error);
						});
						/*deferred.promise.then(function(data) {
							instance._object = data;
						},function(error){
							console.log(error);
						});*/
          }
        };
		instance._init();
        return {
          getObject: instance._getObject
        };
    }
  ]).factory('RestResource',['$resource', function($resource) {
      return {
        getObject: $resource('http://localhost:8080/greeting', {
          //program: '@program'
        }, {
          query: {
            method: 'GET',
            //responseType: 'json',
            isArray: false,
            transformResponse: function(dataIn) {
              if (angular.isDefined(dataIn)) {
                dataIn = angular.fromJson(dataIn);
              }
              console.log(dataIn);
              return dataIn;
            }
          }
        })
      };
  }
  ]);
//})();