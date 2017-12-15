"use strict";

app.service("WalmartService", function($http, WALMART_CONFIG){

    const searchProducts = (query) => {
        return $http.get(`http://api.walmartlabs.com/v1/search?apiKey=${WALMART_CONFIG}&format=json&query=${query}&responseGroup=full`);
        };
    
    return {searchProducts};  
});


