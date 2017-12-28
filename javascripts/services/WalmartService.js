"use strict";

app.service("WalmartService", function($http, WALMART_CONFIG){

    const searchProducts = (query) => {
        return $http.get(`https://homecapstone.herokuapp.com/api/walmart/v1/search?apiKey=${WALMART_CONFIG}&format=json&query=${query}&responseGroup=full`);
        };

    const searchProductsInNew = (query) => {
        return $http.get(`https://homecapstone.herokuapp.com/api/walmart/v1/search?apiKey=${WALMART_CONFIG}&format=json&query=${query}&numItems=8&responseGroup=full`);
        };
    
    return {searchProducts, searchProductsInNew};  
});


