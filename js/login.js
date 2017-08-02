/**
 * Created by alexandrupetru on 19/06/2017.
 */

var app = angular.module("loginModule",["firebase","ngRoute","ngMaterial","tabsModule"]);
//tabModule is here for the purpose of displaying register and resetpass.included their controller in the tabsModule.

app.controller("loginController",["$scope", "$window", "$firebaseObject","$firebaseArray","$firebaseAuth","$location","$log", function($scope,$window, $firebaseObject,$firebaseArray, $firebaseAuth,$location,$log) {
    // download the data into a local object
    //$scope.data = $firebaseObject(ref);
    // putting a console.log here won't work, see below
    $scope.authObj = $firebaseAuth();

    $scope.authObj.$onAuthStateChanged(function(firebaseUser) {
        if (firebaseUser) {
            var url = "http://" + $window.location.host + "/habitsAngularMaterial/mainpage.html";
            $log.log(url);
            $window.location.href = url;
        }
        else {

        }
    });

    $scope.Login=function(){
        try{
            $scope.authObj.$signInWithEmailAndPassword($scope.email, $scope.password)
                .then(function() {
                    console.log($scope.authObj.$getAuth());

                })
                .catch(function(error) {
                    console.log(error.message);
                    if(error.message==="The email address is badly formatted."){
                        swal("Error", "Invalid email", "error");
                    }
                    else if(error.message==="There is no user record corresponding to this identifier. The user may have been deleted."){
                        swal("Error", "There is no user with this email.", "error");
                    }
                    else if(error.message==="The password is invalid or the user does not have a password."){
                        swal("Error", "Wrong password", "error");
                    }
                    else{
                        swal("Error", "Login failes", "error");
                    }
                });
        }
        catch(err){
            console.log(err.message)
            if(err.message==="signInWithEmailAndPassword failed: First argument \"email\" must be a valid string."){
                swal("Error", "Please write your email address", "error");
            }
            else if(err.message==="signInWithEmailAndPassword failed: Second argument \"password\" must be a valid string."){
                swal("Error", "Please write your password", "error");
            }
            else{
                swal("Error", "Login failes", "error");
            }
        }
    };


}]);

