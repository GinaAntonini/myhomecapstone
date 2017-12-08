"use strict";

app.controller("EditProjectCtrl", function($location, $rootScope, $routeParams, $scope, ProjectService){
    const getProjectToEdit = () => {
        ProjectService.getSingleImprovementProject($routeParams.id).then((results) =>{
            $scope.project = results.data;
            }).catch((err) =>{
            console.log("err in getProjectToEdit", err);
        });
    };
    getProjectToEdit();

    $scope.editProjectInFirebase = (project) => {
		ProjectService.editImprovementProject($routeParams.id, project).then(() => {
            getProjects();
            $location.path("/improvements/viewprojects");
        }).catch((err) => {
            console.log("error in editProjectInFirebase", err);
        });
    };

    const getProjects = () => {
        ProjectService.getCurrentProjectsFromFirebase($rootScope.uid).then((results) => {
        $scope.projects = results;
        }).catch((err) => {
            console.log("error in getProjects", err);
        });
    };
});