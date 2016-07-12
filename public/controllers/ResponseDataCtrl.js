app.controller('ResponseDataCtrl', function ($scope, $http) {
        // Chart Options
        $scope.options = {
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


        
        //Audio Player
        $scope.audioPlayer = {};
        $scope.audioPlayer.domElement = document.getElementById('audioPlayer');
        $scope.audioPlayer.src = '';
        $scope.audioPlayer.answers = [];
        $scope.audioPlayer.toggleAudio = function(songURL, playPause, arrIndex) {
            
            if(playPause){
            for(i in $scope.audioPlayer.answers){
                $scope.audioPlayer.answers[i].playButtonVisible = true;
            }     
            $scope.audioPlayer.answers[arrIndex].playButtonVisible = false;
            
            $scope.audioPlayer.domElement.src = songURL;
            $scope.audioPlayer.domElement.play();
            } else{
                $scope.audioPlayer.domElement.pause();
                $scope.audioPlayer.answers[arrIndex].playButtonVisible = true;
            }
        }
        
       $http({
            method: 'GET',
            url: '/results'
        }).then(function successCallback(response) {

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
                response.data.results[i].responses[4].playButtonVisible = true;
                $scope.audioPlayer.answers.push(response.data.results[i].responses[4])
            }

        }, function errorCallback(response) {
             console.log(response);
        });
});
