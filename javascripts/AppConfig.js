"use strict";

app.run(function($location, $rootScope, FIREBASE_CONFIG){
    firebase.initializeApp(FIREBASE_CONFIG);
});

app.config(function($routeProvider){
    $routeProvider
      .when("/create/newtask", {
        templateUrl: 'partials/create/newtask.html',
        controller: 'NewTaskCtrl',
      })
      .when("/create/newproject", {
        templateUrl: 'partials/create/newproject.html',
        controller: 'NewProjectCtrl',
      })
      .when("/maintenance/viewtasks", {
        templateUrl: 'partials/maintenance/viewtasks.html',
        controller: 'ViewTasksCtrl',
      })
      .when("/maintenance/seasonalview", {
        templateUrl: 'partials/maintenance/maintseasonal.html',
        controller: 'MaintSeasonalCtrl',
      })
      .when("/maintenance/archives", {
        templateUrl: 'partials/maintenance/maintarchives.html',
        controller: 'MaintArchivesCtrl',
      })
      .when("/improvements/viewprojects", {
        templateUrl: 'partials/improvements/viewprojects.html',
        controller: 'ViewProjectsCtrl',
      })
      .when("/improvements/seasonal", {
        templateUrl: 'partials/improvements/improveseasonal.html',
        controller: 'ImproveSeasonalCtrl',
      })
      .when("/improvements/archives", {
        templateUrl: 'partials/improvements/improvearchives.html',
        controller: 'ImproveArchivesCtrl',
      })          
      .when("/login", {
        templateUrl: 'partials/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise('/login');
  });