app.controller('ResponseDataCtrl', function ($scope, $http) {

        $scope.optionsChart1 = {
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

        $scope.dataChart1 = [
            {
                key: "Yes",
                y: 0
            },
            {
                key: "No",
                y: 0
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
        
       $http({
            method: 'GET',
            url: '/results'
        }).then(function successCallback(response) {
            
            
            for(i in response.data.results){
                response.data.results[i].responses
                
                if(response.data.results[i].responses[0]){
                    $scope.dataChart1[0].y++;
                } else{
                    $scope.dataChart1[1].y++;
                }
                console.log(response.data.results[i].responses)
            }
            console.log($scope.dataChart1)
        }, function errorCallback(response) {
             console.log(response);
        });
});
