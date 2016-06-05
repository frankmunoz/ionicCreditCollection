/**
 * login Service
 * @namespace loginservice
 * @memberOf Services
 */
(function () {
  'use strict';

  angular
    .module('app')
    .service('LoginService', function($q) {
        return {
            validateCredentials: function(data) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (data.username == 'user' && data.password == 'secret') {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }
                promise.success = function(fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function(fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            }
        }
    })



/*
    .factory('LoginService', LoginService);

  LoginService.$inject = [];

  /**
   * @namespace loginservice
   * @memberOf login
   */
   /*
  function LoginService() {
    var service = {
      validateCredentials: __validateCredentials
    };

    return service;

    function __validateCredentials(data) {
      if(data.username==="vivi" && data.password === "farfan"){
        return {success:"true",data:{},message:"Bienvenido"};
      }
      return {success:"false",data:{},message:"Datos errados"};
    }

  }*/
})();
