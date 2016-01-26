(function() {
    'use strict';
    angular.module("about").service("aboutService", function($resource) {	
        
        // document resource
        this.about = $resource('/REST/rest.php', {},
            {
                getInfo : { method: 'GET' }
            }
        );
                
    });
})();