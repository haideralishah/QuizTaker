/**
 * Created by haider on 11/13/2015.
 */
angular.module('quizTaker')
  .controller("testConditionController", function($scope, $rootScope, questionBank, $stateParams){

    var indexOfTest = $stateParams.testID;
    $scope.indexOfTest = $stateParams.testID;
    console.log(indexOfTest);
    $scope.questionBank = questionBank[indexOfTest];


  });
