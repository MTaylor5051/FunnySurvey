app.controller('ResponseDataCtrl', function ($scope, $http) {
        $scope.optionsChart1 = {
            chart: {
                type: 'pieChart',
                height: 240,
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

        $scope.dataChart1 = [
            {
                key: "Yes",
                y: 5
            },
            {
                key: "No",
                y: 2
            }
        ];
        
        $scope.optionsChart2 = {
            chart: {
                type: 'pieChart',
                height: 140,
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

        $scope.dataChart2 = [
            {
                key: "Yes",
                y: 5
            },
            {
                key: "No",
                y: 2
            }
        ];

        $scope.optionsChart3 = {
            chart: {
                type: 'pieChart',
                height: 140,
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

        $scope.dataChart3 = [
            {
                key: "Yes",
                y: 5
            },
            {
                key: "No",
                y: 2
            }
        ];

        $scope.optionsChart4 = {
            chart: {
                type: 'pieChart',
                height: 140,
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

        $scope.dataChart4 = [
            {
                key: "Yes",
                y: 5
            },
            {
                key: "No",
                y: 2
            }
        ];
        
});
