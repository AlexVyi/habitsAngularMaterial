/**
 * Created by alexandrupetru on 20/06/2017.
 */

var app = angular.module("directiveModule",[]);


app.directive("login", function () {  //loginpage
    return {
        restrict:'E',
        templateUrl:'login.html'

    }
});

app.directive("home", function () {  //inject into main
    return {
        restrict:'E',
        templateUrl:'home.html'

    }
});
app.directive("account", function () {  //inject into main
    return {
        restrict:'E',
        templateUrl:'account.html'

    }
});
app.directive("addgoals", function () {  //inject into main
    return {
        restrict:'E',
        templateUrl:'addgoals.html'

    }
});
app.directive("faq", function () {  //inject into main
    return {
        restrict:'E',
        templateUrl:'faq.html'

    }
});
app.directive("editgoal", function () {  //inject into main
    return {
        restrict:'E',
        templateUrl:'editgoal.html'

    }
});
    app.directive("userholiday", function () {  //inject into main
        return {
            restrict: 'E',
            templateUrl: 'userholiday.html'

        }
    });







