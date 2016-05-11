var topicsApp = angular.module('topicsApp', ['ngRoute']);

    // create the controller and inject Angular's $scope
    topicsApp.controller('mainController', function($scope, $route, $routeParams, $location, $http) {
        
        $http({
          method: 'GET',
          url: './master_projects.json'
        }).then(function successCallback(response) {
            $scope.masterProjects = response.data;
          }, function errorCallback(response) {
            console.log(response.status);
          });

        $scope.filterFilter = 'category';
        
        $scope.pickFilter = function(val) {
            $scope.filterFilter = val;  
        };
        
        var currentPage = $location.path();
         
        $scope.go = function() {
            $('#Container').mixItUp('filter', 'all');
        };
         
         if (currentPage != '') {
            var mixitup = "." + currentPage.replace(/\//g, "");
         } else {
             var mixitup = "all";
         }
         
         $scope.sortOrder = 'year';
         $scope.reverse = true;
         $scope.sort = function(val) {
             $scope.sortOrder = val;
             $scope.reverse = ($scope.sortOrder === val) ? !$scope.reverse : false;
         }
         
         $scope.categories = [];
         $scope.tagFilters = [];
         
         $scope.addCategory = function(val) {
            $scope.categories = $scope.categories + val;
            console.log($scope.categories);
         };
         
         $(function(){

    	// Instantiate MixItUp:
    
    	    $('#Container').mixItUp({
            	load: {
            		filter: mixitup,
            		sort: 'year:desc name:asc',
            	},
            	controls: {
            	    toggleFilterButtons: true,
            	    toggleLogic: 'or'
            	}
            });
    
        });
     })