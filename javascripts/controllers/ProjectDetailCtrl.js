"use strict";

app.controller("ProjectDetailCtrl", function($location, $rootScope, $routeParams, $scope, ProjectService){
    const getProject = () => {
        ProjectService.getSingleImprovementProject($routeParams.id).then((results) =>{
            $scope.project = results.data;
            $scope.project.dateToBeCompleted = moment(results.data.dateToBeCompleted);
            }).catch((err) =>{
            console.log("err in getProject", err);
        });
    };
    getProject();
});