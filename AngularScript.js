var app= angular.module("myApp",['angular-growl']);
app.controller('cont',['$scope', 'growl', function($scope, growl){
    //TESTING NOTIFS
    $scope.Notif=function(){
        growl.info("trolling you");
    };
    //Active tab
    $scope.WorkA="active";
    $scope.HousesA="";
    $scope.JobsA="";
    $scope.TransportA="";
    $scope.EatA="";
    $scope.MiscA="";
    //Tab Switcher
    $scope.MiscAc=function(){
        $scope.HousesA="";
        $scope.JobsA="";
        $scope.TransportA="";
        $scope.WorkA="";
        $scope.EatA="";
        $scope.MiscA="active";
    };
    $scope.EatAc=function(){
        $scope.HousesA="";
        $scope.JobsA="";
        $scope.TransportA="";
        $scope.WorkA="";
        $scope.EatA="active";
        $scope.MiscA="";
    };
    $scope.WorkAc=function(){
        $scope.EatA="";
        $scope.HousesA="";
        $scope.JobsA="";
        $scope.TransportA="";
        $scope.WorkA="active";
        $scope.MiscA="";
    };
    $scope.TransportAc=function(){
        $scope.EatA="";
        $scope.HousesA="";
        $scope.JobsA="";
        $scope.TransportA="active";
        $scope.WorkA="";
        $scope.MiscA="";
    };
    $scope.JobsAc=function(){
        $scope.EatA="";
        $scope.HousesA="";
        $scope.JobsA="active";
        $scope.TransportA="";
        $scope.WorkA="";
        $scope.MiscA="";
    };
    $scope.HousesAc=function(){
        $scope.EatA="";
        $scope.HousesA="active";
        $scope.JobsA="";
        $scope.TransportA="";
        $scope.WorkA="";
        $scope.MiscA="";
    };
    //Board message
    $scope.Msg="Welcome to this game";
    //Random messages
    $scope.Meds="You find some tablets";
    $scope.Food=["","You find an old sandwich","Someone threw a banana at you","You find some pet food","You return with a mini piece of cake","You find some chewing gum"];
    $scope.Search=["","Sweet!, you found some bottles!","You find bottles behind the bench","You find some bottles in the trash can","That car just dropped some bottles!","A stranger gives you some bottles"]
    //Work actions
    $scope.WorkActions=function(workid){
        var seed = Math.floor((Math.random() * 5) + 1);
        switch(workid){
            /** Search for bottles **/case 1: $scope.Msg=$scope.Search[seed];$scope.Prestige+=seed*2;  $scope.Bottles+=seed; if($scope.Mood>0){$scope.Mood-=seed*2;} if($scope.Hunger>0){$scope.Hunger-=seed*3}; break;
            /** Sell bottles **/case 2: if($scope.Hunger>0){$scope.Hunger-=seed*2};$scope.Msg="You sold "+$scope.Bottles+" Bottles for "+$scope.BottlePrice+" $ each, making in total "+$scope.Bottles*$scope.BottlePrice+"$";$scope.Prestige+=Math.floor($scope.Bottles/10); $scope.Money+= $scope.Bottles*$scope.BottlePrice;$scope.Mood+=Math.floor($scope.Bottles*$scope.BottlePrice*2); $scope.Bottles=0; break;
            /** Search for food **/case 3: $scope.Msg=$scope.Food[seed];$scope.Hunger+=seed; if($scope.Mood>0){$scope.Mood-=seed*2}; if($scope.Health>0){$scope.Health-=Math.floor(seed)};break;
            /** Rest In the Park**/case 4: $scope.Mood+=seed*2; $scope.Hunger-=seed;break;
            /** Search for Meds**/case 5: $scope.Msg=$scope.Meds;$scope.Health+=seed*2;if($scope.Mood>0){$scope.Mood-=seed*2;}; if($scope.Hunger>0){$scope.Hunger-=seed*3}; break;
        }
        $scope.Check();
    };
    //Job Buttons
    $scope.Job=["btn-default",
        "btn-default",
        "btn-default",
        "btn-default"];
    //House Buttons
    $scope.House=["btn-default",
        "btn-default",
        "btn-default",
        "btn-default"];
    //Troll Buttons
    $scope.Transport=["btn-default",
        "btn-default",
        "btn-default",
        "btn-default"];
    //Stats
    $scope.Bottles=0;
    $scope.BottlePrice=0.5;
    $scope.Rent=0;
    $scope.Turn=0;
    $scope.Health=100;
    $scope.Hunger=100;
    $scope.Mood=100;
    $scope.Age=16;
    $scope.Money=0;
    $scope.Prestige=0;
    //Turn Routine
    $scope.Check=function(){
        if($scope.Mood<0){$scope.Mood=0}
        if($scope.Hunger<0){$scope.Hunger=0}
        if($scope.Health<0){$scope.Health=0}
        if($scope.Mood>100){$scope.Mood=100}
        if($scope.Hunger>100){$scope.Hunger=100}
        if($scope.Health>100){$scope.Health=100}
        $scope.BottlePrice= Math.floor(Math.random()*100 +1)/100;
        $scope.Turn+=1;
        if($scope.Turn%365==0){
            $scope.Age+=1;
        }
        if($scope.Mood>70){
            $scope.MoodBar="progress-bar-success";
        } else if($scope.Mood>50){
            $scope.MoodBar="progress-bar-info";
        }else if($scope.Mood>30){
            $scope.MoodBar="progress-bar-warning";
        }else{
            $scope.MoodBar="progress-bar-danger";
        }
        if($scope.Hunger>70){
            $scope.HungerBar="progress-bar-success";
        } else if($scope.Hunger>50){
            $scope.HungerBar="progress-bar-info";
        }else if($scope.Hunger>30){
            $scope.HungerBar="progress-bar-warning";
        }else{
            $scope.HungerBar="progress-bar-danger";
        }
        if($scope.Health>70){
            $scope.HealthBar="progress-bar-success";
        } else if($scope.Health>50){
            $scope.HealthBar="progress-bar-info";
        }else if($scope.Health>30){
            $scope.HealthBar="progress-bar-warning";
        }else{
            $scope.HealthBar="progress-bar-danger";
        }
    };
    //Game Over
    $scope.dead = function(){alert("Game Over, you died at Turn "+$scope.Turn);};
    //Version
    $scope.Ver="0.2.1/0.2.2 A";
    $scope.Title="Life sim "+$scope.Ver;
    //Setup
    $scope.HealthBar="progress-bar-success";
    $scope.MoodBar="progress-bar-success";
    $scope.HungerBar="progress-bar-success";
}]);

