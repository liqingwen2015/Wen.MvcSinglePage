//路由配置
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: '../Scripts/core/views/demo.html', controller: 'demoController' })
    .when('/error', { templateUrl: '../Scripts/Views/Error.html', controller: 'ErrorController' })
    .otherwise({ redirectTo: '/error' });
}]);