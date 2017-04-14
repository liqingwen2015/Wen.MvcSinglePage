//路由配置
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', { templateUrl: '../Scripts/core/views/demo/index.html', controller: 'demoController' })
    .when('/home', { templateUrl: '../Scripts/core/views/demo/index.html', controller: 'demoController' })
    .when('/add', { templateUrl: '../Scripts/core/views/demo/edit.html', controller: 'demoEditController' })
    .when('/edit/:id', { templateUrl: '../Scripts/core/views/demo/edit.html', controller: 'demoEditController' })
    .when('/error', { templateUrl: '../Scripts/Views/Error.html', controller: 'errorController' })
    .otherwise({ redirectTo: '/error' });
}]);