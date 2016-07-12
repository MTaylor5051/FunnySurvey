app.controller('HomeCtrl', function ($scope, $http) {
$scope.stats = {};    
$scope.stats.completedSurveysPercent = "...";
$scope.stats.startedSurveys = "...";

$scope.options = {
            chart: {
                type: 'pieChart',
                height: 350,
                donut: false,
                color: ['#ffa500', '#939393'],
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,
                showLegend: false,
                pie: {
                    startAngle: function(d) { return d.startAngle -Math.PI },
                    endAngle: function(d) { return d.endAngle -Math.PI }
                }
            }
        };


    $http({
         method: 'GET',
         url: '/completedSurveysCount'
    }).then(function successCallback(response) {
       $scope.data = [
            {
                key: "Completed",
                y: response.data.completed
            },
            {
                key: "Incomplete",
                y: response.data.incomplete
            }
        ];
        
    $scope.stats.startedSurveys = response.data.totalSurveysStarted;
    $scope.stats.completedSurveysPercent = Math.round(response.data.completed / response.data.totalSurveysStarted * 100);
    
    }, function errorCallback(response) {
      console.log(response);
    });

});