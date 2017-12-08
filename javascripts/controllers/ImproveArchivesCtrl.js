"use strict";

app.controller("ImproveArchivesCtrl", function($location, $rootScope, $routeParams, $scope, ProjectService){
    const getCompletedProjects = () => {
    	ProjectService.getCompletedProjectsFromFirebase($rootScope.uid).then((results) => {
            $scope.completed = results;
            $location.path('/improvements/archives');
    	}).catch((err) => {
    	console.log("error in getCompletedProjects", err);
   	});
   };
   getCompletedProjects();
});