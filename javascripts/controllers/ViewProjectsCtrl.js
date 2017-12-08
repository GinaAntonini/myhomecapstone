"use strict";

app.controller("ViewProjectsCtrl", function($location, $rootScope, $scope, ProjectService){
    const getProjects = () => {
        ProjectService.getCurrentProjectsFromFirebase($rootScope.uid).then((results) => {
        $scope.projects = results;
    }).catch((err) => {
    console.log("error in getProjects", err);
   });
};
getProjects();

    $scope.editProject = (projectId) => {
        $location.path(`/improvements/edit/${projectId}`);
    };
});