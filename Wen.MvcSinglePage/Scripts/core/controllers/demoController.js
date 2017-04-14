app.controller('demoController', function ($scope, $http, $location, $routeParams, requestService) {
    console.log('demoController');

    var pageIndex = 1;
    $scope.model = {};
    $scope.list = [];

    $scope.del = function () {
        var id = 1;

        requestService.del(id)
            .then(function (result) {
                var data = result.data;
                console.log(data);
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

    $scope.demoKey = $scope.demoKey ? $scope.demoKey : "";
    $scope.details = function (key, pageIndex) {
        requestService.details(key, pageIndex)
            .then(function (result) {
                var data = result.data;
                $scope.list = data;
            });
        console.log($scope.list);
    };
    $scope.details("", pageIndex);

    //查询
    $scope.search = function () {
        $scope.list = [];
        $scope.details($scope.demoKey, pageIndex);
    };

    $scope.add = function () {
        $location.url('/add');
    };

    $scope.edit = function (id) {
        $location.url('/edit/' + id);
    };

    $scope.loadMore = function () {
        pageIndex++;
        $scope.details($scope.demoKey, pageIndex);
    };
});

app.controller('demoEditController',
    function ($scope, $http, $location, $routeParams, requestService) {
        console.log('demoEditController');

        $scope.demo = {
            Id: '',
            Name: '',
            Price: 0
        };

        var id = $routeParams.id;
        $scope.get = function () {
            requestService.get(id).then(function (result) {
                console.log(result);
                $scope.demo = result.data;
            });
        }
        if (id != null) { $scope.get(); }

        $scope.save = function () {
            if (id) {
                $scope.demo.Id = id;
                requestService.update($scope.demo).then(function (result) {
                    console.log(result);
                    var data = result.data;
                    console.log("更新成功");
                    console.log(data);
                });
            } else {
                requestService.add($scope.demo).then(function (result) {
                    console.log(result);
                    var data = result.data;
                    console.log("添加成功");
                    console.log(data);
                });
            };
        };

    });