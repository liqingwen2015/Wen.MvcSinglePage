app.controller('demoController', function ($scope, $http, $location, $routeParams, requestService) {
    console.log('demoController');

    var currentPageIndex = 1;
    $scope.list = [];

    //删除
    $scope.del = function (id) {
        requestService.del(id)
            .then(function (result) {
                var data = result.data;
                console.log(data);
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
    $scope.details("", currentPageIndex);

    //查询
    $scope.search = function () {
        $scope.list = [];
        $scope.details($scope.demoKey, currentPageIndex);
    };

    //新增
    $scope.add = function () {
        $location.url('/add');
    };

    //编辑
    $scope.edit = function (id) {
        $location.url('/edit/' + id);
    };

    //下一页
    $scope.nextPage = function () {
        currentPageIndex++;
        $scope.details($scope.demoKey, currentPageIndex);
    };

    //上一页
    $scope.prePage = function () {
        if (currentPageIndex > 1) {
            currentPageIndex--;
        }
        $scope.details($scope.demoKey, currentPageIndex);
    };
});

//demoEditController
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