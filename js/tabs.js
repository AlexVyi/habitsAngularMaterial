/**
 * Created by alexandrupetru on 22/06/2017.
 * I use two tipes of switching between the windows.tabController is used for navigation inside the app
 * and the simple Controller to switch between register,login and reset password from the landing page.
 * this way I avoid colision between scopes and elements.they are both attached to the tab module.
 */
var app  = angular.module("tabsModule",[]);

app.controller("tabController",function ($scope) {

        this.tab = "Home";

        this.selectedTab = function (setTab) {
            this.tab = setTab;
        }

        this.isSelected = function (checkTab) {
            return this.tab === checkTab
        }

});

app.controller('Controller', ['$scope', function($scope) {

    $scope.showRegister = function(){
        $scope.templateURL = 'register.html';//another way of displaying newly created html elements and corespondent pages/snippets.
        $scope.beenAdded = function(){//controls the ng-hide from landing.
            return false;
        };
    };
    $scope.showReset = function () {
        $scope.templateURL = 'resetPassword.html';
        $scope.beenAdded = function(){
            return false;
        };
    };
    $scope.showLogin = function () {
        $scope.templateURL = 'login.html';
        $scope.beenAdded = function(){
            return false;
        };
    };
    /*$scope.showUserOnHoliday = function () {
        $scope.templateURL = 'userholiday.html';
        $scope.beenAdded = function(){
            return false;
        };
    };
    $scope.showAccount = function () {
        $scope.templateUrl='account.html';
        $scope.beenAdded = function(){
            return false;
        };
    };

    here tried to use the same controller for the navigation inside the account tab but failed*/



}]);
