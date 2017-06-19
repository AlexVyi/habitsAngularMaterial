
var app = angular.module("mainmodule",[]);

app.directive ("main",function () {
    return{
        restrict:'E',
        templateUrl:'mainpage.html'
    }
})
app.controller("mainController",["$scope", "$window", "$firebaseObject","$firebaseArray","$firebaseAuth", function($scope,$window, $firebaseObject,$firebaseArray, $firebaseAuth) {
  // download the data into a local object
  //$scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
  $scope.authObj = $firebaseAuth();
  var ref;
  var firebaseObj;
  var user;


  $scope.authObj.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      user=firebaseUser;
      console.log("Signed in as:", firebaseUser.uid);
      ref = firebase.database().ref("users/"+firebaseUser.uid);
      firebaseObj= $firebaseObject(ref)
      firebaseObj.$bindTo($scope, "user").then(function() {
        console.log($scope.user.userName); // { foo: "bar" }
        $scope.GetGoals();
      });
    }
    else {
          //do not forget to put some logic here
    }

  });

  $scope.GetGoals=function(){
    ref = firebase.database().ref("users/"+user.uid+"/Goals/Donts");
    firebaseObj=$firebaseObject(ref)
    firebaseObj.$bindTo($scope, "donts").then(function() {
      for (var i = 0; i < Object.keys($scope.donts).length-2; i++) {
        $scope.donts["Dont"+i].canUndo=false;
      }
    });
    ref = firebase.database().ref("users/"+user.uid+"/Goals/Dailys");
    firebaseObj=$firebaseObject(ref)
    firebaseObj.$bindTo($scope, "dailys").then(function() {
      for (var i = 0; i < Object.keys($scope.dailys).length-2; i++) {
        $scope.dailys["Daily"+i].canUndo=false;
      }
    });
    ref = firebase.database().ref("users/"+user.uid+"/Goals/Weeklys");
    firebaseObj=$firebaseObject(ref)
    firebaseObj.$bindTo($scope, "weeklys").then(function() {
      for (var i = 0; i < Object.keys($scope.weeklys).length-2; i++) {
        $scope.weeklys["Weekly"+i].canUndo=false;
      }
    });
    ref = firebase.database().ref("users/"+user.uid+"/Goals/Monthlys");
    firebaseObj=$firebaseObject(ref)
    firebaseObj.$bindTo($scope, "monthlys").then(function() {
      for (var i = 0; i < Object.keys($scope.monthlys).length-2; i++) {
        $scope.monthlys["Monthly"+i].canUndo=false;
      }
    });


  };


  $scope.Logout=function(){
    $scope.authObj.$signOut()
  };

  $scope.AddGoal=function() {
    $scope.FormatGoal();

    //Nici sa nu intrebi
    switch ($scope.newGoal.goalType.toString()) {
      case "Dont":
        if(!Object.keys($scope.donts).includes("Dont0")){
          $scope.donts["Dont"+(Object.keys($scope.donts).length-3)]=$scope.newGoal;
        }
        else{
          $scope.donts["Dont"+(Object.keys($scope.donts).length-2)]=$scope.newGoal;
        }
      break;
      case "Daily":
        if(!Object.keys($scope.dailys).includes("Daily0")){
          $scope.dailys["Daily"+(Object.keys($scope.dailys).length-3)]=$scope.newGoal;
        }
        else{
          $scope.dailys["Daily"+(Object.keys($scope.dailys).length-2)]=$scope.newGoal;
        }
      break;
      case "Weekly":
        if(!Object.keys($scope.weeklys).includes("Weekly0")){
          $scope.weeklys["Weekly"+(Object.keys($scope.weeklys).length-3)]=$scope.newGoal;
        }
        else{
          $scope.weeklys["Weekly"+(Object.keys($scope.weeklys).length-2)]=$scope.newGoal;
        }
      break;
      case "Monthly":
        if(!Object.keys($scope.monthlys).includes("Monthly0")){
          $scope.monthlys["Monthly"+(Object.keys($scope.monthlys).length-3)]=$scope.newGoal;
        }
        else{
          $scope.monthlys["Monthly"+(Object.keys($scope.monthlys).length-2)]=$scope.newGoal;
        }
      break;
      default:
      }

      changeTab('Home')
    }
    //ok, vad ca ai intrebat
    //fiecare goal e trimis in nodul care ii corespunde tipului sau (de aia switch)
    //fiecare goal primeste un index unic numit tipulSau+un index
    //indexul e obtinut vazand cate goal-uri sunt deja in nodul acelui tip
    //deoarece vreau sa incep indexarea de la 0 si angular adauga de la el doua noduri invizibile in consola scriu -3


    //tot ce fac aici ar fi mult mai eficent cu array-uri in loc de obiecte, dar nu sunt sigur ca functioneaza bindto

    $scope.FormatGoal=function(){
      $scope.newGoal.timestamp=Date.now();
      $scope.newGoal.actualRepeats=0;
      $scope.newGoal.money=0;

      switch ($scope.newGoal.goalType.toString()) {
        case "Dont":
            $scope.newGoal.repeats=1;
        break;
        case "Daily":
            $scope.newGoal.points=500;
        break;
        case "Weekly":
            $scope.newGoal.points=1000;
        break;
        case "Monthly":
            $scope.newGoal.points=3000;
        break;
        default:
      }
    }

    $scope.CheckGoal=function(goal){
      if(goal.goalType.toString()!=="Dont" && goal.actualRepeats>=goal.repeats){
        $scope.user.points+=goal.points/2;
      }
      else{
        $scope.user.points+=goal.points;
      }
      if(goal.goalType.toString()!=="Dont"){
        goal.actualRepeats++;
      }

      if($scope.user.points>$scope.GetFibbonacci($scope.user.level)*1000){
        $scope.user.level++;
      }
      else if($scope.user.level>1 && $scope.user.points<$scope.GetFibbonacci($scope.user.level-1)*1000){
        $scope.user.level--;
      }
      if($scope.user.points<0){
        $scope.user.points=0;
      }
      goal.canUndo=true;
    }

    $scope.UndoGoal=function(goal){
      if(goal.goalType.toString()!=="Dont" && goal.actualRepeats>goal.repeats){
        $scope.user.points-=goal.points/2;
      }
      else{
        $scope.user.points-=goal.points;
      }
      if(goal.goalType.toString()!=="Dont"){
        goal.actualRepeats--;
      }

      if($scope.user.points>$scope.GetFibbonacci($scope.user.level)*1000){
        $scope.user.level++;
      }
      else if($scope.user.level>1 && $scope.user.points<$scope.GetFibbonacci($scope.user.level-1)*1000){
        $scope.user.level--;
      }
      if($scope.user.points<0){
        $scope.user.points=0;
      }
      goal.canUndo=false;
    }

    $scope.GetFibbonacci=function(n){
       var f1=2
       var f2=3
       var f=5;
       for(var i=0; i<n-1; i++){
         f1=f2;
         f2=f;
         f=f1+f2;
       }
       return f;
    }


}]);
