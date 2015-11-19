/**
 * Created by haider on 11/13/2015.
 */
angular.module('quizTaker')
  .controller("chooseTestController", function($scope, questionBank){


    //$rootScope.questionBank = questionBank;
    $scope.questionBank = questionBank;

  });
