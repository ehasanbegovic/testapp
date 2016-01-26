(function() {
    'use strict';
    angular.module("about").provider('aboutResolver', aboutResolver);


    function aboutResolver() {
        
    this.$get = function(aboutService) {
        return aboutService.about.getInfo();
    }
    };

})();