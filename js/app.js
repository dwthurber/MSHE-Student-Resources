var topicsApp = angular.module('topicsApp', ['ngRoute']);

    // create the controller and inject Angular's $scope
    topicsApp.controller('mainController', function($scope, $route, $routeParams, $location, $http, $filter) {
        
        $scope.guide = '';
        
        $scope.selectGuide = function(val){
            $scope.guideText = val;
            $scope.guide = $filter('lowercase')(val.replace(/[\s]/g, ''));
            console.log($scope.low);
            
            $('.group').mixitup('filter', '.' + val)
        };
        
        $scope.show = 'false';
        
        $scope.showDetails = function(val) {
            $scope.show = val;
            console.log($scope.show);
        }

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
            $scope.guide = currentPage.replace(/\//g, "");
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
         
        //  $scope.catChecked = null;
        //  $scope.availChecked = null;
         
         $scope.inputFilter = '';
         
         $scope.inputChange = function() {
             // clear all other filters
             $scope.tagIncludes = [];
             categoryIncludes = [];
             availIncludes = [];
             $scope.catChecked = false;
             $scope.availChecked = false;
             
             var searchString = $filter('lowercase')($scope.inputFilter);
            //  console.log(searchString);
            
            var $matching = $();
            $('.mix').each(function(){
               var $this = $(this);
               if (
                ($this.find('.title').text().toLowerCase().indexOf(searchString) > -1) ||
                ($this.find('.category').text().toLowerCase().indexOf(searchString) > -1) ||
                ($this.find('.year').text().toLowerCase().indexOf(searchString) > -1) ||
                ($this.find('.details').text().toLowerCase().indexOf(searchString) > -1)
                ) {
                    $matching = $matching.add(this);
                }
            });
            $('#Container').mixItUp('filter', $matching);
         };
         
         var availIncludes = [];
         
         $scope.filterAvail = function(val) {
             // clear all other filters
             categoryIncludes = [];
             $scope.catChecked = false;
             $scope.inputFilter = '';
             $scope.tagIncludes = [];
             
             if (availIncludes.indexOf(val) > -1) {
                 var index=availIncludes.indexOf(val)
                 availIncludes.splice(index,1); 
             } else {
                 availIncludes.splice(0, 0, val);
             }
             
             if (availIncludes.length > 0) {
                 $('#Container').mixItUp('filter', availIncludes.toString());
             } else {
                 $('#Container').mixItUp('filter', 'all');
             }
             
             console.log(availIncludes.toString());
         }
         
         var categoryIncludes = [];
         
         $scope.filterCat = function(val) {
             // clear all other filters
             availIncludes = [];
             $scope.availChecked = false;             
             $scope.inputFilter = '';
             $scope.tagIncludes = [];
             
             if (categoryIncludes.indexOf(val) > -1) {
                 var index=categoryIncludes.indexOf(val)
                 categoryIncludes.splice(index,1); 
             } else {
                 categoryIncludes.splice(0, 0, val);
             }
             
             if (categoryIncludes.length > 0) {
                 $('#Container').mixItUp('filter', categoryIncludes.toString());
             } else {
                 $('#Container').mixItUp('filter', 'all');
             }
             
             console.log(categoryIncludes.toString());
         };
         
         $scope.tagIncludes = [];
         
         $scope.filterTag = function(val) {
             // clear all other filters
             categoryIncludes = [];
             availIncludes = [];
             $scope.catChecked = false;
             $scope.availChecked = false;
             $scope.inputFilter = '';
             
             if ($scope.tagIncludes.indexOf(val) > -1) {
                 var index=$scope.tagIncludes.indexOf(val)
                 $scope.tagIncludes.splice(index,1); 
             } else {
                 $scope.tagIncludes.splice(0, 0, val);
             }
             
             if ($scope.tagIncludes.length > 0) {
                 $('#Container').mixItUp('filter', $scope.tagIncludes.toString());
             } else {
                 $('#Container').mixItUp('filter', 'all');
             }
             
             console.log($scope.tagIncludes.toString());
         };
         
         $scope.clearAll = function () {
            $scope.tagIncludes = [];
            categoryIncludes = [];
            availIncludes = [];
            $scope.catChecked = false;
            $scope.availChecked = false;
            $scope.inputFilter = '';
            console.log(categoryIncludes.toString());
         };
         
         $(function(){

    	// Instantiate MixItUp:
    
    	    $('#Container').mixItUp({
            	load: {
            		filter: mixitup,
            		sort: 'year:desc name:asc',
            	}, 
            });
            
            $('.group').mixItUp({
                load: {
            		filter: mixitup,
            	}, 
            	selectors: {
            		target: '.resource'
            	}
            });
    
        });

     })