// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('quizTaker', ['ionic'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('oathPage', {
        url: '/oathPage',
        controller: 'oathPageController',
        templateUrl: 'views/oathPage/oathPage.html'
      })
      .state('chooseTest', {
        url: '/chooseTest',
        controller: 'chooseTestController',
        templateUrl: 'views/chooseTest/chooseTest.html'
      })
      .state('testCondition', {
        url: '/testCondition/:testID',
        controller: 'testConditionController',
        templateUrl: 'views/testCondition/testCondition.html'
      })
      .state('startTest', {
        url: '/startTest/:startID',
        controller: 'startTestController',
        templateUrl: 'views/startTest/startTest.html'
      })
      .state('testComplete', {
        url: '/testComplete',
        controller: 'testCompleteController',
        templateUrl: 'views/testComplete/testComplete.html'
      });
    $urlRouterProvider
      .otherwise('/chooseTest');
  })

    .factory("questionBank", function() {

    return [
      {
        nameOfTest : "Apptitude",
        testMarks: 15,
        testDescription: "Quiz has 30 questions from Wily HTML and CSS by Jon Ducket." ,
        testTime: 70,
        passingMarks:10,
        Questions: [
          {
            QuiestionNo: 1,
            questionTitle: "",
            Question: "Who was the founding father of Pakistan?",
            options: [
              {option: "Muhammad Ali Jinnah", ansValue: true, marks: 5},
              {option:"Allama Iqbal", ansValue: false, marks:0},
              {option:"Liaquat Ali Khan",ansValue: false, marks:0},
              {option:"Altaf Hussain", ansValue:false, marks:0}
            ],
            ans: 1
          },
          {
            QuiestionNo: 2,
            questionTitle: "Simplify the following:",
            Question: "3 x 3 + 2 / 2 + 1",
            options: [
              {option: "7", ansValue: false, marks: 0},
              {option: "11", ansValue: true, marks: 5},
              {option: "13", ansValue: false, marks: 0},
              {option: "4", ansValue: false, marks: 0}
            ],
            ans: 2

          },
          {
            QuiestionNo: 3,
            questionTitle: "Change the voice",
            Question: "He has eaten the food.",
            options: [
              {option: "Food has been eaten by him", ansValue: true, marks: 5},
              {option: "Food has eaten by him", ansValue: false, marks: 0},
              {option: "Food has eat him", ansValue: false, marks: 0},
              {option: "Food has been eated by him", ansValue: false, marks: 0}
            ],
            ans: 1
          }]

      },

      {
        nameOfTest : "Mathematics",
        testDescription: "Quiz has 30 questions from Mathematics 10." ,
        testMarks: 20,
        testTime: 60,
        passingMarks:15,
        Questions: [
          {
            QuiestionNo: 1,
            questionTitle: "Find the Square root of the following",
            Question: "625",
            options: [
              {option: "5", ansValue: false, marks: 0},
              {option: "125", ansValue: false, marks: 0},
              {option: "75", ansValue: false, marks: 0},
              {option: "25", ansValue: true, marks: 5}
            ],
            ans: 4
          },
          {
            QuiestionNo: 2,
            questionTitle: "Simplify the following:",
            Question: "3 x 3 + 2 / 2 + 1",
            options: [
              {option: "7", ansValue: false, marks: 0},
              {option:"11", ansValue: true, marks: 5},
              {option: "13", ansValue: false, marks: 0},
              {option: "4", ansValue: false, marks: 0}
            ],
            ans: 2
          },
          {
            QuiestionNo: 3,
            questionTitle: "Find the GCF",
            Question: "125 , 625",
            options: [
              {option: "5", ansValue: false, marks: 0},
              {option:"25", ansValue: false, marks: 0},
              {option: "125", ansValue: true, marks: 5},
              {option: "625", ansValue: false, marks: 0}
            ],
            ans: 3
          },
          {
            QuiestionNo: 4,
            questionTitle: "Choose the correct answer.",
            Question: "Select the largest nuumber",
            options: [
              {option: "0", ansValue: true, marks: 5},
              {option: "-0.1", ansValue: false, marks: 0},
              {option: "-0.3", ansValue: false, marks: 0},
              {option: "-0.2", ansValue: false, marks: 0}
            ],
            ans: 1
          }]

      }

    ];
  })






















.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
