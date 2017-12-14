"use strict";

app.service("AmazonService", function($http, AmazonSignerService){

    const searchProducts = (query) => {
        AmazonSignerService.getAmazonQueryString(query);
    };

    // const searchProducts = (query) => {
    //     return $http.get()
    // }
    // const searchProducts = (query) => {
    //     return $http.get(
    //         `http://webservices.amazon.com/onca/xml?Service=AWSECommerceService%0AOperation=ItemSearch&AWSAccessKeyId=${}&AssociateTag=${}&Keywords=${query}&Timestamp=[YYYY-MM-DDThh:mm:ssZ]&Signature=${}`
    //     )
    // };

    return {searchProducts};

});