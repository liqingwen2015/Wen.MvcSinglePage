//服务
var demoService = angular.module('demoService', []);

//请求服务
demoService.factory('requestService', function ($http, $q) {
    var params = {
        method: '',
        url: '',
        headers: { 'Content-Type': 'application/json' },
        data: {}
    }
    var request = {
        //增
        add: function (data) {
            params.method = "post";
            params.url = "../api/demo/add";
            params.data = data;
            return requestService($http, $q, params);
        },
        //删
        del: function (id) {
            params.method = "delete";
            params.url = "../api/demo/del?id=" + id;
            return requestService($http, $q, params);
        },
        //改
        update: function (data) {
            params.method = "put";
            params.url = "../api/demo/update";
            params.data = data;
            return requestService($http, $q, params);
        },
        //查
        get: function (id) {
            params.method = "get";
            params.url = "../api/demo/get?id=" + id;
            return requestService($http, $q, params);
        },
        //分页
        details: function (key, pageIndex) {
            params.method = "get";
            params.url = "../api/demo/details?key=" + key + "&pageIndex=" + pageIndex;
            return requestService($http, $q, params);
        }
    };

    return request;
});

//请求服务
function requestService($http, $q, request) {
    return $http(request);
};