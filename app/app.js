(function() {
'use strict'
angular.module("app", ["about"]);

    // State definition
    angular.module("app").config(function($stateProvider) {

        $stateProvider
        // states

            .state('app', {
            url: '/',
            abstract: true
        })

        .state('app.about', {
            url: '/about',
            views: {
                'about': {
                    templateUrl: '/about/about.html',
                    controller: 'AboutController as vm'
                },
            },
            resolve: {
                controllerData: function(aboutService) {
                    return aboutResolver(aboutService);
                }
            }
        })
        
    });

})();