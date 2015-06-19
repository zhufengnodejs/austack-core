/**
 * @ngdoc overview
 * @name austackApp.admin.user.create
 * @description
 * The `austackApp.admin.user.create` module which provides
 *
 * - {@link austackApp.admin.user.create.controller:UserCreateController UserCreateController}
 *
 * @requires ui.router
 * @requires ngMaterial
 * @requires ngMessages
 * @requires components/auth
 * @requires components/toast
 * @requires components/remoteUnique
 */

(function () {
  'use strict';

  angular
    .module('austackApp.admin.user.create', [
      'ui.router',
      'ngMessages',
      'ngMaterial',
      'austackApp.auth',
      'austackApp.toast',
      'austackApp.remoteUnique',
      'austackApp.mongooseError'
    ])
    .config(configureUserCreateRoutes);

  /**
   * Route configuration function configuring the passed $stateProvider.
   * Register the global create-user state with the edit template
   * paired with the UserCreateController as 'create'.
   *
   * @param {$stateProvider} $stateProvider - The state provider to configure
   */

  configureUserCreateRoutes.$inject = ['$stateProvider'];

  function configureUserCreateRoutes($stateProvider) {
    var createListState = {
      name: 'root.admin.user.list.create',
      url: 'create',
      authenticate: true,
      role: 'admin',
      onEnter: onEnterUserListCreateView
    };

    $stateProvider.state(createListState);
  }


  /**
   * Function executed when entering the admin.user.create state.
   * Open the create dialog
   */

  onEnterUserListCreateView.$inject = ['$rootScope', '$state', '$mdDialog'];

  function onEnterUserListCreateView($rootScope, $state, $mdDialog) {
    var unregisterListener = $rootScope.$on('$stateChangeStart', onStateChange);

    $mdDialog.show({
      controller: 'UserCreateController',
      controllerAs: 'create',
      templateUrl: 'app/admin/user/create/create.html',
      clickOutsideToClose: false
    }).then(transitionTo, transitionTo);

    /**
     * Function executed when resolving or rejecting the
     * dialog promise.
     *
     * @param {*} answer - The result of the dialog callback
     * @returns {promise}
     */
    function transitionTo(answer) {
      return $state.transitionTo('root.admin.user.list');
    }

    /**
     * Function executed when changing the state.
     * Closes the create dialog
     */
    function onStateChange() {
      unregisterListener();
      $mdDialog.hide();
    }
  }

})();
