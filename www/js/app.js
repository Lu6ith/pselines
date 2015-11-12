var app = angular.module('pselines', [
	'ionic',
  'ngStorage',
	'ngCordova',
	'firebase',
  'ngMessages',
	'angularMoment',
	'pselines.controllers',
	'pselines.services',
	'pselines.filters',
	'pselines.utils'
]);


app.constant("FIREBASE_URL", 'https://lines-pse.firebaseio.com');
app.constant("FACEBOOK_APP_ID", '456322094553906');


app.run(function ($rootScope, $ionicPlatform, $cordovaStatusbar) {


		$ionicPlatform.ready(function () {

			// Hide the accessory bar by default
			if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}
			// Color the iOS status bar text to white
			if (window.StatusBar) {
				$cordovaStatusbar.overlaysWebView(true);
				$cordovaStatusbar.style(0); //Light
			}
		});
	});

app.config(function ($stateProvider, $urlRouterProvider, FACEBOOK_APP_ID) {
	openFB.init({appId: FACEBOOK_APP_ID});
});

app.config(function ($stateProvider, $urlRouterProvider) {

		$stateProvider
			/*.state('intro', {
				url: '/',
				templateUrl: 'templates/intro.html',
				controller: 'IntroCtrl'
			})*/

			.state('app', {
				url: "/app",
				abstract: true,
				templateUrl: "templates/menu.html",
				controller: 'MenuCtrl'
			})

      .state('app.searchlines', {
        url: "/searchlines",
        views: {
          'menuContent': {
            templateUrl: "templates/searchlines.html",
            controller: 'SearchLinesCtrl'
          }
        }
      })

      .state('app.showline', {
				url: "/showline/:lineId",
				cache: false,
				views: {
					'menuContent': {
						templateUrl: "templates/showline.html",
						controller: 'ShowLineCtrl'
					}
				}
			})

      .state('login', {
        url: '/login',
        templateUrl: 'views/login/login.html',
        controller:'loginController'
      })

      .state('forgot', {
        url: '/forgot',
        templateUrl: 'views/forgot/forgot.html',
        controller:'forgotController'
      })

      .state('register', {
        url: '/register',
        templateUrl: 'views/register/register.html',
        controller:'registerController'
      })
		;

		// if none of the above states are matched, use this as the fallback
		$urlRouterProvider.otherwise('/login');

	});
