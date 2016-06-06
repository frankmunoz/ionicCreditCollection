/**
 * Loans Controller
 * @namespace Loans
 * @memberOf Controllers
 */
(function () {
  'use strict';

  angular
    .module('app')
    .controller('LoansCtrl', LoansCtrl);

  LoansCtrl.$inject = ['LoansService','$state'];

  /**
   * @namespace LoansCtrl
   * @desc Loans Controller
   * @param {Object[]} Dependencies
   * @memberOf Loans.Controller
   */
  function LoansCtrl(LoansService,$state) {
    var vm = this;
    vm.customerList={};
    vm.customerEdit=customerEdit;

    activate();

    function activate() {
      vm.customerList = LoansService.getCustomerList();
    }

    function customerEdit(id){
      if(id){
        $state.go('tab.chats');
        console.log("Editing " + id);
      }
    }
  }
})();
