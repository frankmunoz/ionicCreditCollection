/**
 * loans Service
 * @namespace LoansService
 * @memberOf Services
 */
(function () {
  'use strict';

  angular
    .module('app')
    .factory('LoansService', LoansService);

  LoansService.$inject = [];

  /**
   * @namespace LoansService
   * @memberOf loans
   */
  function LoansService() {
    var service = {
      getCustomerList: __getCustomerList
    };

    return service;

    function __getCustomerList() {
      return [{
        'name':'Cliente 1',
        'address':'direccion 1',
        'phone':'telefono 1'
      },{
        'name':'Cliente 2',
        'address':'direccion 2',
        'phone':'telefono 2'
      }];
    }
  }
})();
