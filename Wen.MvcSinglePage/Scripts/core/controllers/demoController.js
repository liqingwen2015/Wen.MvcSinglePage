app.controller('demoController', function ($scope, $http, $location, $routeParams, requestService) {
    console.log('demoController');

    $scope.model = {};

    $scope.add = function () {
        $scope.model = {
            'Id': 10,
            'Name': '新商品',
            'Price': 500
        };

        requestService.add($scope.model)
            .then(function (result) {
                var data = result.data;
                $scope.model = data;
                //$scope.$apply();
            });
    };

    $scope.del = function () {
        var id = 1;

        requestService.del(id)
            .then(function (result) {
                var data = result.data;
                $scope.model = data;
            });
    };

    $scope.update = function () {
        $scope.model = {
            'Id': 10,
            'Name': '新商品',
            'Price': 500
        };

        requestService.update($scope.model)
            .then(function (result) {
                var data = result.data;
                $scope.model = data;
            });
    };

    $scope.get = function () {
        var id = 5;

        requestService.get(id)
            .then(function (result) {
                var data = result.data;
                $scope.model = data;
            });
    };

    $scope.details = function () {
        var pageIndex = 5;

        requestService.details(pageIndex)
            .then(function (result) {
                var data = result.data;
                $scope.model = data;
                //$scope.$apply();
            });
    };

});