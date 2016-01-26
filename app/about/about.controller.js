(function() {
    'use strict';
    angular.module("about").controller("AboutController", AboutController);
    
    
    function AboutController(aboutService, controllerData) {
	
	var vm = this;
    
    vm.controllerData = controllerData;
	
    }
})();