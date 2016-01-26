(function() {
  'use strict';
  angular.module("contact").service("contactService", function($resource) {

    // document resource
    this.about = $resource('/REST/rest.php', {}, {
      getInfo: {
        method: 'GET'
      }
    });
  });
})();