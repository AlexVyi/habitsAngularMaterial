/**
 * Created by alexandrupetru on 13/06/2017.
 */
(function() {
    'use strict';
 var app =  angular.module("habits", ["mainModule","loginModule","directiveModule","tabsModule","firebase", "ngMaterial","ngRoute"]);

    app.config(function ($mdThemingProvider) {
        $mdThemingProvider
            .theme('default').dark()
            .primaryPalette('cyan')
            .accentPalette('blue-grey')
            .warnPalette('orange');

    })
})();
/*here find all the modules and the theme provider*/