"use strict";

app.controller("ImproveArchivesCtrl", function($location, $rootScope, $scope, ProjectService){
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