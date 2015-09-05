var app= angular.module("myApp",[]);
var audio = new Audio("http://soundjax.com/reddo/56895%5EDING.mp3");
var yay = new Audio("http://images.wikia.com/freddy-fazbears-pizza/images/a/a2/CROWD_SMALL_CHIL_EC049202.ogg");
app.controller('cont',['$scope',function($scope){
    $scope.price=[10,100,1000];
    $scope.CperC=1;
    $scope.Cookies=0;
    $scope.Clickers=0;
    $scope.milk=0;
    $scope.progress=0;
    $scope.grammy=0;
    $scope.PPC=20;
    $scope.Progressbar=function(){
        if($scope.progress<100) {
            $scope.progress += $scope.PPC;
            if($scope.progress>=100){
                $scope.progress=0;
                $scope.Cookies+=$scope.CperC;
                audio.play();
        }
        }
    }
    $scope.BMilk=function(){
        if($scope.Cookies>=$scope.price[1]) {
            $scope.milk += 1;
            $scope.Cookies-=$scope.price[1];
            $scope.price[1]=Math.floor($scope.price[1]*1.5);
            yay.play();
        }
    }
    $scope.Clicker=function(){
        if($scope.Cookies>=$scope.price[0]) {
            $scope.Clickers += 1;
            $scope.Cookies-=$scope.price[0];
            $scope.price[0]=Math.floor($scope.price[0]*1.5);
            $scope.CperC+=$scope.Clickers*2;
            yay.play();
        }
    }
    $scope.Grammy=function(){
        if($scope.Cookies>=$scope.price[2]) {
            $scope.grammy += 1;
            $scope.Cookies-=$scope.price[2];
            $scope.price[2]=Math.floor($scope.price[2]*1.5);
            $scope.PPC+=20;
            yay.play();
        }
    }
}]);
