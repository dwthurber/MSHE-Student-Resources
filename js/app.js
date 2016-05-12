var topicsApp = angular.module('topicsApp', ['ngRoute']);

    // create the controller and inject Angular's $scope
    topicsApp.controller('mainController', function($scope, $route, $routeParams, $location, $http) {
        
        // $http({
        //   method: 'GET',
        //   url: './master_projects.json'
        // }).then(function successCallback(response) {
        //     $scope.masterProjects = response.data;
        //   }, function errorCallback(response) {
        //     console.log(response.status);
        //   });
        
        // var getTags = function(data) {  
        //     angular.foreach($scope.masterProjects, function(tags) {
        //         $scope.tags = tags.tags;
                
        //     });
        //     console.log($scope.tags);
        // };

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
             
             if ($scope.reverse === true) {
                 var ascdesc = 'desc'
             } else {
                 var ascdesc = 'asc'
             }
             
             $('#Container').mixItUp('sort', val + ':' + ascdesc);
         };

        // // $scope.categoryIncludes = [];

        // // $scope.filterCat = function(newVal) {
        // //     var i = $.inArray(newVal, $scope.categoryIncludes);
        // //     if (i > -1) {
        // //         $scope.categoryIncludes.splice(i, 1);
        // //     } else {
        // //         $scope.categoryIncludes.push(newVal);
        // //     }
            
        // //     console.log($scope.categoryIncludes);
        // // };
        
        // // $scope.filterByCategory = function(mp) {
        // //     if ($scope.categoryIncludes.length > 0) {
        // //         angular.foreach($scope.categoryIncludes, function(key) {
        // //             if ($scope.masterProjects.master_projects.categories.indexof(key) >= 0) 
        // //                 return;
        // //         })
        // //     }
        // //     return mp;
        // // }
         
         $(function(){

    	// Instantiate MixItUp:
    
    	    $('#Container').mixItUp({
            	load: {
            		filter: mixitup,
            		sort: 'year:desc name:asc',
            	}, 
            });
    
        });
     })