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
        templateUrl:'editgoal.html',
        scope:true

    }
});
    app.directive("userholiday", function () {  //inject into main
        return {
            restrict: 'E',
            templateUrl: 'userholiday.html',
            scope:true

        }
    });
app.directive("resetpass", function () {  //inject into main
    return {
        restrict: 'EA',
        templateUrl: 'resetPassword.html',
        scope:true

    }
});
app.directive("register", function () {  //inject into main
    return {
        restrict: 'EA',
        templateUrl: 'register.html',
        scope:true

    }
});









