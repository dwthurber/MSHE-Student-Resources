var topicsApp = angular.module('topicsApp', ['ngRoute']);

    // create the controller and inject Angular's $scope
    topicsApp.controller('mainController', function($scope, $route, $routeParams, $location) {
        
        $scope.filterFilter = 'category';
        
        $scope.pickFilter = function(val) {
            $scope.filterFilter = val;  
        };
        
        var currentPage = $location.path();
         
        $scope.go = function(val) {
            $location.path(val);
            $('#Container').mixItUp('filter', "." + val.replace(/\//g, ""));
        };
         
         if (currentPage != '') {
            var mixitup = "." + currentPage.replace(/\//g, "");
         } else {
             var mixitup = "all";
         }
         
         $(function(){

    	// Instantiate MixItUp:
    
    	    $('#Container').mixItUp({
            	load: {
            		filter: mixitup,
            		sort: 'name:asc'
            	}
            });
    
        });
     })