"use strict";

let isAuth = (LoginService) => new Promise ((resolve, reject) => {
  if(LoginService.isAuthenticated()){
    resolve();
  } else {
    reject();
  }
});

app.run(function($location, $rootScope, FIREBASE_CONFIG, LoginService){
    firebase.initializeApp(FIREBASE_CONFIG);

    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute) {
      var logged = LoginService.isAuthenticated();
      var appTo;
      if (currRoute.originalPath) {
        appTo = currRoute.originalPath.indexOf('/login') !== -1;
      }
      if (!appTo && !logged) {
        event.preventDefault();
        $location.path('/login');
      }
    });
});

app.config(function($routeProvider){
    $routeProvider
      .when("/create", {
        templateUrl: 'partials/create/create.html',
        controller: 'CreateCtrl',
        resolve: {isAuth}
      })
      .when("/create/newtask", {
        templateUrl: 'partials/create/newtask.html',
        controller: 'NewTaskCtrl',
        resolve: {isAuth}
      })
      .when("/create/newproject", {
        templateUrl: 'partials/create/newproject.html',
        controller: 'NewProjectCtrl',
        resolve: {isAuth}
      })
      .when("/maintenance", {
        templateUrl: 'partials/maintenance/maintenance.html',
        controller: 'MaintenanceCtrl',
        resolve: {isAuth}
      })
      .when("/maintenance/viewtasks", {
        templateUrl: 'partials/maintenance/viewtasks.html',
        controller: 'ViewTasksCtrl',
        resolve: {isAuth}
      })
      .when("/maintenance/edit/:id", {
        templateUrl: 'partials/maintenance/edittask.html',
        controller: 'EditTaskCtrl',
        resolve: {isAuth}
      })
      .when("/maintenance/seasonalview", {
        templateUrl: 'partials/maintenance/maintseasonal.html',
        controller: 'MaintSeasonalCtrl',
        resolve: {isAuth}
      })
      .when("/maintenance/detail/:id", {
        templateUrl: 'partials/maintenance/taskdetail.html',
        controller: 'TaskDetailCtrl',
        resolve: {isAuth}
      })
      .when("/maintenance/archives", {
        templateUrl: 'partials/maintenance/maintarchives.html',
        controller: 'MaintArchivesCtrl',
        resolve: {isAuth}
      })
      .when("/maintenance/materials", {
        templateUrl: 'partials/maintenance/maintmaterials.html',
        controller: 'SearchProductsCtrl',
        resolve: {isAuth}
      })
      .when("/improvements", {
        templateUrl: 'partials/improvements/improvements.html',
        controller: 'ImprovementsCtrl',
        resolve: {isAuth}
      })
      .when("/improvements/viewprojects", {
        templateUrl: 'partials/improvements/viewprojects.html',
        controller: 'ViewProjectsCtrl',
        resolve: {isAuth}
      })
      .when("/improvements/edit/:id", {
        templateUrl: 'partials/improvements/editproject.html',
        controller: 'EditProjectCtrl',
        resolve: {isAuth}
      })
      .when("/improvements/seasonalview", {
        templateUrl: 'partials/improvements/improveseasonal.html',
        controller: 'ImproveSeasonalCtrl',
        resolve: {isAuth}
      })
      .when("/improvements/archives", {
        templateUrl: 'partials/improvements/improvearchives.html',
        controller: 'ImproveArchivesCtrl',
        resolve: {isAuth}
      })
      .when("/improvements/materials", {
        templateUrl: 'partials/improvements/improvematerials.html',
        controller: 'SearchProductsCtrl',
        resolve: {isAuth}
      })
      .when("/improvements/detail/:id", {
        templateUrl: 'partials/improvements/projectdetail.html',
        controller: 'TaskDetailCtrl',
        resolve: {isAuth}
      })   
      .when("/login", {		
        templateUrl: 'partials/login.html',		
        controller: 'LoginCtrl',
      })
      .when("/dashboard", {		
        templateUrl: 'partials/dashboard.html',		
        controller: 'DashboardCtrl',
      })    
      .when("/searchproducts", {		
        templateUrl: 'partials/searchproducts.html',		
        controller: 'SearchProductsCtrl',
      })         
      .otherwise('/login');
  });

  app.config(function($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      '*://www.youtube.com/**'
    ]);
  });