/**
 * Created by alexandrupetru on 13/06/2017.
 */
(function() {
    'use strict';
 var app =  angular.module("habits", ["mainModule","loginModule","directiveModule","tabsModule","firebase", "ngMaterial","ngRoute"]);

    app.config(function ($mdThemingProvider) {
        $mdThemingProvider
            .theme('default').dark()
            .primaryPalette('amber',{
                'default': '400', // by default use shade 400 from the pink palette for primary intentions
                'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
                'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
                'hue-3': 'A100' //
            })
            .accentPalette('indigo')
            .warnPalette('deep-orange');

    })
})();
/*here find all the modules and the theme provider*/

