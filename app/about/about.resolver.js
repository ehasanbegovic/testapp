(function() {
  'use strict';
  angular.module("about").provider('aboutResolver', aboutResolver);

  function aboutResolver() {
    this.$get = function(aboutService) {
      return resolve;//aboutService.about.getInfo();
    };
  }

  function resolve(){
    console.log("resolved!");
  }

})();
