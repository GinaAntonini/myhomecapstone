"use strict";

app.controller("SearchProductsCtrl", function($location, $rootScope, $scope, WalmartService){
    $scope.items = [];

    $scope.onEnterSearch = (event) => {
        if(event.keyCode === 13){
            WalmartService.searchProducts(event.target.value).then((results) => {
                $scope.items = results.data.items;
                console.log(results.data.items);
            }).catch((err) => {
                console.log("error in searchProducts", err);
            });
        }
    };
});