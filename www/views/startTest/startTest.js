/**
 * Created by haider on 11/13/2015.
 */
angular.module('quizTaker')
  .controller("startTestController", function($scope, $rootScope, questionBank, $stateParams, $state){

    var indexOfTest = $stateParams.startID;
    //$scope.indexOfTest = $stateParams.startID;
    //console.log(indexOfTest);

    $rootScope.indexOfTest = indexOfTest;


    var questionNo = 0;

    $scope.questionBank = questionBank[indexOfTest].Questions[questionNo];

    var lengthOfQuestions = questionBank[indexOfTest].Questions.length;

    //console.log(lengthOfQuestions);

    $rootScope.answers = 0;
    $scope.options =  $scope.questionBank.options;

    $scope.selectedOpt = {};

    $scope.optionChange = function(option) {
      //console.log("Selected Serverside, text:", option.option, "value:", option.ansValue);
      $scope.chosedOpt = option;
    };


    $scope.next = function () {
      //console.log(option);
      console.log($scope.chosedOpt);


      if($scope.chosedOpt.ansValue == true ){
        $rootScope.answers = $rootScope.answers + $scope.chosedOpt.marks;
      }
      console.log($rootScope.answers);
      questionNo++;
      if(questionNo == lengthOfQuestions){
        console.log("test completed");
        $state.go('testComplete');
      }
      else{
        $scope.questionBank = questionBank[indexOfTest].Questions[questionNo];
        $scope.options =  $scope.questionBank.options;
        $scope.optionChange($scope.options);
        $scope.selectedOpt = {};

      }
    };








  /*  *//*StopWatch*/


     var sec = 60;
     var min = questionBank[indexOfTest].testTime - 1;


    var startTimer = setInterval(function (){

           var display = document.getElementById("display");

          display.innerHTML = min+ ' : ' + (sec - 1) ;

              //display.innerHTML = min+ ' : ' + (sec - 1) ;
           sec--;
           if(sec < 0){
             //clearInterval(startTimer);
             //console.log(sec);
             min = min -1;
             sec = 59;



             display.innerHTML = min+ ' : ' + (sec) ;
             //clearInterval(startTimer);

           }
            if (min == 0 && sec == 0){
                clearInterval(startTimer);
              console.log("test Complete");
              $state.go('testComplete');
            }
     },1000);







  });
