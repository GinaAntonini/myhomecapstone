"use strict";

app.controller("ImproveSeasonalCtrl", function($location, $rootScope, $scope, ProjectService){
    
    const getSeasonToComplete = (season) => {
        ProjectService.getSeasonsFromFirebase(season).then((results) => {
        $scope.projects = results;
    }).catch((err) => {
        console.log("error in getSeasonToComplete", err);
    });
    }; 
    getSeasonToComplete("Spring");

    $scope.getProjectsInSeason = (event) => {
        getSeasonToComplete(event.target.value);
    };

    $scope.markProjectCompleted = (project) => {
		project.completed = !project.completed;
		ProjectService.markCompleted(project.id, project.completed).then(() => {
           getSeasonToComplete(project.seasonToComplete);
        }).catch((err) => {
            console.log("error in markCompleted", err);
        });
    };
});