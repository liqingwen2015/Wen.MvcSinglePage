//服务
var demoService = angular.module('demoService', []);

//请求服务
demoService.factory('requestService', function ($http, $q) {
    //var request = {
    //    method: 'POST',
    //    url: '',
    //    headers: { 'Content-Type': 'application/json' },
    //    data: {}
    //};
    //var postData = {
    //    lists: function (type) {
    //        request.method = "get";
    //        request.url = "../api/demo/get";
    //        return requestService($http, $q, request);
    //    },
    //    submit_product: function (data) {
    //        request.method = "post";
    //        request.url = "../api/order";
    //        request.data = data;
    //        return requestService($http, $q, request);
    //    }
    //};

    var params = {
        method: '',
        url: '',
        headers: { 'Content-Type': 'application/json' },
        data: {}
    }
    var request = {
        lists: function (type) {
            params.method = "get";
            params.url = "../api/demo/get";
            return requestService($http, $q, params);
        },
        submit_product: function (data) {
            params.method = "post";
            params.url = "../api/order";
            params.data = data;
            return requestService($http, $q, params);
        }
    };
    return request;
});

//请求服务
function requestService($http, $q, request) {
    return $http(request);
};