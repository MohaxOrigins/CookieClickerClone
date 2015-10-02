var app= angular.module("myApp",[]);
app.controller('cont',['$scope' , function($scope, growl){
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
    //TESTING NOTIFS
    $scope.Notifications=[];
    //Board message
    $scope.Msg="Welcome to this game";
    //Work actions
    $scope.WorkActions=function(workid){
        var seed = Math.floor((Math.random() * 5) + 1);
        switch(workid){
            /** Search for bottles **/case 1: $scope.Msg=Search[seed];$scope.Prestige+=seed*2;  $scope.Bottles+=seed; if($scope.Mood>0){$scope.Mood-=seed*2;} if($scope.Hunger>0){$scope.Hunger-=seed*3}; break;
            /** Sell bottles **/case 2: if($scope.Hunger>0){$scope.Hunger-=seed*2};$scope.Msg="You sold "+$scope.Bottles+" Bottles for "+$scope.BottlePrice+" $ each, making in total "+$scope.Bottles*$scope.BottlePrice+"$";$scope.Prestige+=Math.floor($scope.Bottles/10); $scope.Money+= $scope.Bottles*$scope.BottlePrice;$scope.Mood+=Math.floor($scope.Bottles*$scope.BottlePrice*2); $scope.Bottles=0; break;
            /** Search for food **/case 3: $scope.Msg=Food[seed];$scope.Hunger+=seed; if($scope.Mood>0){$scope.Mood-=seed*2}; if($scope.Health>0){$scope.Health-=Math.floor(seed)};break;
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
        $scope.MoodShow=false;
        $scope.HealthShow=false;
        $scope.HungerShow=false;
        if($scope.Mood<0){$scope.Mood=0}
        if($scope.Hunger<0){$scope.Hunger=0}
        if($scope.Health<0){$scope.Health=0}
        if($scope.Mood>100){$scope.Mood=100}
        if($scope.Hunger>100){$scope.Hunger=100}
        if($scope.Health>100){$scope.Health=100}
        $scope.BottlePrice= Math.floor(Math.random()*100 +1)/100;
        $scope.Turn+=1;
        if($scope.Turn%365==0) {
            $scope.Age += 1;
        }
        //Mood Check
        if($scope.Mood>70){
            $scope.MoodBar="progress-bar-success";
            $scope.MoodCritical=0;
        } else if($scope.Mood>50){
            $scope.MoodBar="progress-bar-info";
            $scope.MoodCritical=0;
        }else if($scope.Mood>30){
            $scope.MoodBar="progress-bar-warning";
            $scope.MoodCritical=0;
        }else{
            $scope.MoodCritical+=1;
            $scope.MoodShow=true;
            $scope.MoodBar="progress-bar-danger";
        }
        //Hunger Check
        if($scope.Hunger>70){
            $scope.HungerBar="progress-bar-success";
            $scope.HungerCritical=0;
        } else if($scope.Hunger>50){
            $scope.HungerBar="progress-bar-info";
            $scope.HungerCritical=0;
        }else if($scope.Hunger>30){
            $scope.HungerBar="progress-bar-warning";
            $scope.HungerCritical=0;
        }else{
            $scope.HungerCritical+=1;
            $scope.HungerBar="progress-bar-danger";
            $scope.HungerShow=true;
        }
        //Health Check
        if($scope.Health>70){
            $scope.HealthBar="progress-bar-success";
            $scope.HealthCritical=0;
        } else if($scope.Health>50){
            $scope.HealthBar="progress-bar-info";
            $scope.HealthCritical=0;
        }else if($scope.Health>30){
            $scope.HealthBar="progress-bar-warning";
            $scope.HealthCritical=0;
        }else{
            $scope.HealthCritical+=1;
            $scope.HealthShow=true;
            $scope.HealthBar="progress-bar-danger";
        }
        if($scope.HealthCritical>=7||$scope.HungerCritical>=7||$scope.MoodCritical>=7){
            $scope.dead();
        }
        for(notif in $scope.Notifications){
            var index = $scope.Notifications.indexOf(notif);
            if (index > -1) {
                $scope.Notifications.splice(index, 1);
            }
        }
    };
    $scope.Works=WorkList;
    //Game Over
    $scope.dead = function(){
        var reasonOfDeath=null;
        if($scope.HungerCritical>=7){reasonOfDeath="Hunger"};
        if($scope.MoodCritical>=7){reasonOfDeath="Mood"};
        if($scope.HealthCritical>=7){reasonOfDeath="Health"};
        alert("Game Over, you died at Turn "+$scope.Turn+" reason of Death: "+reasonOfDeath);
    };
    //Version
    $scope.Ver="0.2.1 CA";
    $scope.Title="Life sim "+$scope.Ver;
    //Setup
    $scope.HealthBar="progress-bar-success";
    $scope.MoodBar="progress-bar-success";
    $scope.HungerBar="progress-bar-success";
}]);
