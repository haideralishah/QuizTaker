/**
 * Created by haider on 11/13/2015.
 */
angular.module('quizTaker')
  .controller("oathPageController", function($scope, $rootScope, $state){
    $rootScope.hideLogoutButton = true;
    $scope.login = function(){
      $state.go("chooseTest");
    };

  //$scope.questionBank = questionBank;


  });
