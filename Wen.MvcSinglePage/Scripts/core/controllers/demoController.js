app.controller('demoController', function ($scope, $http, $location, $routeParams, requestService) {
    console.log('demoController');
    if (!$scope.productKey) {
        $scope.productKey = "飞机";
    };
    requestService.lists($scope.productKey).then(function (data) {
        console.log(data);
        if (data._code === 200) {
            $scope.orders = data._data;
        };
    });
});