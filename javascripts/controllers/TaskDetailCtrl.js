"use strict";

app.controller("TaskDetailCtrl", function($location, $rootScope, $routeParams, $scope, TaskService){
    const getTask = () => {
        TaskService.getSingleMaintenanceTask($routeParams.id).then((results) =>{
            $scope.task = results.data;
            }).catch((err) =>{
            console.log("err in getTask", err);
        });
    };
    getTask();

    app.filter("GetYouTubeID", function () {
        return function (text) {
            var video_id = text.split('v=')[1].split('&')[0];
            return video_id;
        };
      });
});