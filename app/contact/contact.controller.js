(function() {
  'use strict';
  angular.module("contact").controller("ContactController", ContactController);

  function ContactController(contactService, controllerData) {
    var vm = this;
    vm.controllerData = controllerData;
    vm.loaded = "Contact Loaded!";
  }
})();
