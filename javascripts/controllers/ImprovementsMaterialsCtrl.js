"use strict";

app.controller("ImprovementsMaterialsCtrl", function($location, $rootScope, $scope, ProjectService){
    const getCurrentProjects = () => {
        ProjectService.getCurrentProjectsFromFirebase($rootScope.uid).then((results) => {
        $scope.projects = results;
        $scope.projects.dateToBeCompleted = moment(results.data.dateToBeCompleted);
    }).catch((err) => {
    console.log("error in getCurrentProjects", err);
   });
};
getCurrentProjects();
});