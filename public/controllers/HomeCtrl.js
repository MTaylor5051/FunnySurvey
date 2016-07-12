app.controller('HomeCtrl', function ($scope, $http) {

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

// Simple GET request example:
$http({
  method: 'GET',
  url: '/completedSurveysCount'
}).then(function successCallback(response) {
    console.log(response.data)
    //    $scope.data = [
    //         {
    //             key: "Started",
    //             y: response.data.
    //         },
    //         {
    //             key: "Completed",
    //             y: 2
    //         }
    //     ];
    
}, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
});

});