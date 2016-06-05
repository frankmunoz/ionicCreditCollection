/**
 * sync Service
 * @namespace syncservice
 * @memberOf Services
 */
(function () {
  'use strict';

  angular
    .module('app')
    .factory('syncservice', syncservice);

  sync.$inject = [];

  /**
   * @namespace syncservice
   * @memberOf sync
   */
  function syncservice() {
    var service = {
      sampleOne: sampleOne,
      sampleTwo: sampleTwo
    };

    return service;

    function sampleOne() {
      return true;
    }

    function sampleTwo() {
      return false;
    }
  }
})();
