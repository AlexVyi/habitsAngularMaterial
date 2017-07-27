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

app.controller('Controller', function($scope, $compile, $element){

    $scope.stage = 'Add';
    var childScope;

    $scope.toggleStage = function(){
        if ($scope.stage === 'Add'){
            $scope.stage = 'Remove';

            childScope = $scope.$new();
            var compiledDirective = $compile('<div resetpass></div>');
            var directiveElement = compiledDirective(childScope);
            $('.resetpass').append(directiveElement);
            childScope.$destroy();
            $('.register').empty();
            $scope.stage = 'Add';
        }
    }
    $scope.toggleStage1 = function(){
        if ($scope.stage === 'Add'){
            $scope.stage = 'Remove';

            childScope = $scope.$new();
            var compiledDirective = $compile('<div register></div>');
            var directiveElement = compiledDirective(childScope);
            $('.register').append(directiveElement);
            childScope.$destroy();
            $('.resetpass').empty();
            $scope.stage = 'Add';
        }
    }
});