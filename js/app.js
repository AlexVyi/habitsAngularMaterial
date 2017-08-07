/**
 * Created by alexandrupetru on 13/06/2017.
 */
(function() {
    'use strict';
 var app =  angular.module("habits", ["mainModule","loginModule","directiveModule","tabsModule","firebase", "ngMaterial","ngRoute"]);

    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('myAwesomeTheme')
            .primaryPalette('pink',{
                'default': 'A100', // by default use shade 500 from the teal palette for primary intentions
                'hue-1': '900', // use shade 900 for the <code>md-hue-1</code> class
                'hue-2': '700', // use shade 700 for the <code>md-hue-2</code> class
                'hue-3': '100'

            })
            .accentPalette('indigo',{
            'default': '500', // by default use shade 500 from the teal palette for primary intentions
                'hue-1': '900', // use shade 900 for the <code>md-hue-1</code> class
                'hue-2': '700', // use shade 700 for the <code>md-hue-2</code> class
                'hue-3': '100'
            })
            .warnPalette('deep-orange')


    })
    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('my2ndAwesomeTheme').dark()
            .primaryPalette('blue-grey',{
                'default': '500', // by default use shade 500 from the  palette for primary intentions
                'hue-1': '900', // use shade 900 for the <code>md-hue-1</code> class
                'hue-2': '700', // use shade 700 for the <code>md-hue-2</code> class
                'hue-3': '100'

            })
            .accentPalette('yellow',{
                'default': '500', // by default use shade 500 from the  palette for primary intentions
                'hue-1': '900', // use shade 900 for the <code>md-hue-1</code> class
                'hue-2': '700', // use shade 700 for the <code>md-hue-2</code> class
                'hue-3': '100'
            })
            .warnPalette('deep-orange')
            .backgroundPalette('grey',{
                'default': '500', // by default use shade 500 from the palette for primary intentions
                'hue-1': '900', // use shade 900 for the <code>md-hue-1</code> class
                'hue-2': '700', // use shade 700 for the <code>md-hue-2</code> class
                'hue-3': '100'

            })


    })
})();
/*here find all the modules and the themes provider*/

