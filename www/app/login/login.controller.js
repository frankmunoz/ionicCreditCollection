/**
 * Login Controller
 * @namespace Login
 * @memberOf Controllers
 */
(function () {
  'use strict';

  angular
    .module('app')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope','LoginService','$state','$ionicPopup'];

  /**
   * @namespace LoginCtrl
   * @desc Login Controller
   * @param {Object[]} Dependencies
   * @memberOf Login.Controller
   */
  function LoginCtrl($scope,LoginService,$state,$ionicPopup) {
    $scope.data = {};
    $scope.login = login;
    activate();

    function activate() {
    }

    function login() {
           LoginService.validateCredentials($scope.data).success(function(data) {
               $state.go('tab.dash');
           }).error(function(data) {
               var alertPopup = $ionicPopup.alert({
                   title: 'Login failed!',
                   template: 'Please check your credentials!'
               });
           });
       }


    function loginOLD() {
      var response = LoginService.validateCredentials($scope.data);
      if(response.success){
        $state.go('tab.dash');
      }
      console.log(response);
    }
  }
})();
