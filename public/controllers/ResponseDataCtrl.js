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
                y: 0
            },
            {
                key: "No",
                y: 0
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
                y: 0
            },
            {
                key: "No",
                y: 0
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
                y: 0
            },
            {
                key: "No",
                y: 0
            }
        ];
        
       $http({
            method: 'GET',
            url: '/results'
        }).then(function successCallback(response) {
                   
            for(i in response.data.results){

                if(response.data.results[i].responses[0].answer){
                    $scope.dataChart1[0].y++;
                } else{
                    $scope.dataChart1[1].y++;
                }
                
                if(response.data.results[i].responses[1].answer){
                    $scope.dataChart2[0].y++;
                } else{
                    $scope.dataChart2[1].y++;
                }
 
                 if(response.data.results[i].responses[2].answer){
                    $scope.dataChart3[0].y++;
                } else{
                    $scope.dataChart3[1].y++;
                }

                if(response.data.results[i].responses[3].answer){
                    $scope.dataChart4[0].y++;
                } else{
                    $scope.dataChart4[1].y++;
                } 
            }

        }, function errorCallback(response) {
             console.log(response);
        });
});
