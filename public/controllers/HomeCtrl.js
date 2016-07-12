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

        $scope.data = [
            {
                key: "Started",
                y: 5
            },
            {
                key: "Completed",
                y: 2
            }
        ];
});