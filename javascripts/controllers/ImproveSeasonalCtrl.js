"use strict";

app.controller("ImproveSeasonalCtrl", function($location, $rootScope, $scope, ProjectService){
    // const getProjects = () => {
    //     ProjectService.getCurrentProjectsFromFirebase($rootScope.uid).then((results) => {
    //     $scope.projects = results;
    //     // $location.url("/improvements/seasonalview");
    // }).catch((err) => {
    //     console.log("error in getProjects", err);
    // });
    // };

    const getSeasonToComplete = (season) => {
        console.log("season in getSeasonToComplete", season);
        ProjectService.getSeasonsFromFirebase(season).then((results) => {
        $scope.projects = results;
        console.log("results", results);
    }).catch((err) => {
        console.log("error in getSeasonToComplete", err);
    });
    }; 
    getSeasonToComplete("Spring");

    $scope.getProjectsInSeason = (event) => {
        getSeasonToComplete(event.target.value);
    };

    $scope.markProjectCompleted = (project) => {
        console.log(project);
		project.completed = !project.completed;
		ProjectService.markCompleted(project.id, project.completed).then(() => {
           getSeasonToComplete(project.seasonToComplete);
        }).catch((err) => {
            console.log("error in markCompleted", err);
        });
    };

});