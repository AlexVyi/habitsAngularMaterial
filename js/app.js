/**
 * Created by alexandrupetru on 13/06/2017.
 */
(function() {
    'use strict';
 var app =  angular.module("habits", ["mainModule","loginModule","directiveModule","tabsModule","firebase", "ngMaterial","ngRoute"]);

    app.config(function ($mdThemingProvider) {
        $mdThemingProvider
            .theme('myAsewomeTheme')
            .primaryPalette('teal',{
                'default': '500', // by default use shade 500 from the teal palette for primary intentions
                'hue-1': '900', // use shade 900 for the <code>md-hue-1</code> class
                'hue-2': '700', // use shade 700 for the <code>md-hue-2</code> class
                'hue-3': '100'

            })
            .backgroundPalette('indigo')
            .accentPalette('indigo')
            .warnPalette('deep-orange');

    })
})();
/*here find all the modules and the theme provider*/

