(function() {
  'use strict';
  angular.module("contact").provider('contactResolver', contactResolver);

  function contactResolver() {
    this.$get = function(contactService) {
      return resolve;//aboutService.about.getInfo();
    };
  }

  function resolve(){
    console.log("resolved!");
  }

})();
