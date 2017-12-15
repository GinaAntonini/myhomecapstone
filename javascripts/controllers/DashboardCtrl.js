"use strict";

app.controller("DashboardCtrl", function($location, $rootScope, $scope){
    $scope.getToSearchProducts = () => {
        $location.path("/searchproducts");
    };
});