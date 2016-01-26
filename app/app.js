(function() {
  'use strict';
  angular.module("app", ["ui.router", "about", "contact"]);

  // State definition
  angular.module("app").config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    // states

      .state('app', {
      url: '/',
      views: {
        'app': {
          templateUrl: 'app/hello.html'
        }
      },
      resolve: {
        data: function() {
          console.log("OK");
        }
      }
    })

    .state('about', {
      url: '/about',
      views: {
        'about': {
          templateUrl: 'app/about/about.html',
          controller: 'AboutController as vm'
        },
      },
      resolve: {
        controllerData: function(aboutResolver, aboutService) {
          return aboutResolver(aboutService);
        }
      }
    })

    .state('contact', {
      url: '/contact',
      views: {
        'contact': {
          templateUrl: 'app/contact/contact.html',
          controller: 'ContactController as vm'
        },
      },
      resolve: {
        controllerData: function(contactResolver, contactService) {
          return contactResolver(contactService);
        }
      }
    });

  });

})();
