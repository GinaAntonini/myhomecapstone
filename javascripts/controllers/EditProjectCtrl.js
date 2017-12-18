"use strict";

app.controller("EditProjectCtrl", function($location, $rootScope, $routeParams, $scope, MaterialsService, ProjectService, WalmartService){
    
    const getProjectToEdit = () => {
        ProjectService.getSingleImprovementProject($routeParams.id).then((results) =>{
            $scope.project = results.data;
            $scope.project.dateToBeCompleted = moment(results.data.dateToBeCompleted);
            }).catch((err) =>{
            console.log("err in getProjectToEdit", err);
        });
    };
    getProjectToEdit();

    $scope.editProjectInFirebase = (project) => {
		ProjectService.editImprovementProject($routeParams.id, project).then(() => {
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

    $scope.onEnterSearch = (event) => {
        if(event.keyCode === 13){
            WalmartService.searchProducts(event.target.value).then((results) => {
                $scope.items = results.data.items;
            }).catch((err) => {
                console.log("error in searchProducts", err);
            });
        }
    };

    $scope.saveProjectMaterialToFirebase = (material) => {
        material.uid = $rootScope.uid;
        let newProjectMaterial = MaterialsService.createProjectMaterialObject(material);
        MaterialsService.addNewProjectMaterial(newProjectMaterial).then(() => {
        }).catch((err) => {
            console.log("error in saveProjectMaterialToFirebase", err);
        });
    };
});