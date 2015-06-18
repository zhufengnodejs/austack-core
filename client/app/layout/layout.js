(function () {
  'use strict';

  // register the route config on the application
  angular
    .module('austackApp.layout', [
      'ui.router',
      'austackApp.layout.header',
      'austackApp.layout.breadcrumb',
      'austackApp.layout.footer'
    ])
    .config(configLayoutRoute);

  configLayoutRoute.$inject = ['$stateProvider'];

  function configLayoutRoute($stateProvider) {
    var layoutState = {
      name: 'root',
      url: '',
      abstract: true,
      templateUrl: 'app/layout/layout.html'
        /*,
              views: {
                'header': {
                  templateUrl: 'app/layout/header/header.html',
                  controller: 'HeaderController as vm'
                },
                'sidebar': {
                  templateUrl: 'app/layout/sidebar/sidebar.html',
                  controller: 'SidebarController as vm'
                },
                'breadcrumb': {
                  templateUrl: 'app/layout/breadcrumb/breadcrumb.html',
                  controller: 'BreadcrumbController as vm'
                },
                'footer': {
                  templateUrl: 'app/layout/footer/footer.html',
                  controller: 'FooterController as vm'
                }
              }*/
    };

    $stateProvider.state(layoutState);
  }

})();
