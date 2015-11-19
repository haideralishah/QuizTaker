/**
 * Created by haider on 11/14/2015.
 */
angular.module('quizTaker')
  .controller("testCompleteController", function($scope, $rootScope, questionBank) {
    $scope.passingMarks = questionBank[$rootScope.indexOfTest].passingMarks;
    $scope.totalMarks = questionBank[$rootScope.indexOfTest].testMarks;
    $scope.result = "Congratulations! You have passed";


    if($rootScope.answers < $scope.passingMarks){
      $scope.result = "Failed, need to work hard";

      //$scope.result = "Congratulations! You have passed";
    }

    $scope.resultStatement = $scope.result;

    $scope.testScore = "Your Score is " + $rootScope.answers;

    $scope.testPercent = ($rootScope.answers / $scope.totalMarks) * 100;

  });
