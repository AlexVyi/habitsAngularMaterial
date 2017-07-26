/**
 * Created by alexandrupetru on 22/06/2017.
 */
var app  = angular.module("tabsModule",[]);

app.controller("tabController",function () {
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
        $scope.templateURL = 'register.html';
    };
}]);