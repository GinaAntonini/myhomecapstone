"use strict";

app.controller("SearchProductsCtrl", function($location, $rootScope, $scope, AmazonService){
    $scope.products = [];
    $scope.onEnterSearch = (event) => {
        if(event.keyCode === 13){
            AmazonService.searchProducts(event.target.value).then((results) => {
                $scope.products = results.data.results;
            }).catch((err) => {
                console.log("error in searchProducts", err);
            });
        }
    };
});