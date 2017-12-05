"use strict";

app.controller("LoginCtrl", function($location, $rootScope, $scope, LoginService){
    $scope.authenticate = () => {
        LoginService.authenticateGoogle().then((result) => {
            $rootScope.uid = result.user.uid;
            $scope.$apply(() => {
                $location.url("/maintenance/viewtasks");
            });
            }).catch((err) => {
                console.log("error in authenticateGoogle", err);
            });
    };
});