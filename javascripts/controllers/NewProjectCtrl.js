"use strict";

app.controller("NewProjectCtrl", function($location, $rootScope, $scope, ProjectService){
    
    $scope.addNewProjectToFirebase = () => {
        $scope.newProject.uid = $rootScope.uid;
        ProjectService.postNewImprovementProject($scope.newProject).then((results) => {
            $scope.newProject = {};
            $scope.newProject.dateToBeCompleted = moment(results.data.dateToBeCompleted).format("MM-DD-YYYY");
                $location.url("/improvements/viewprojects");
        }).catch((error) => {
            console.log("error in addNewProjectToFirebase", error);
        });
    };
});