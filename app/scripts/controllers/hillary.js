"use strict";

/**
 * @ngdoc function
 * @name desktopApp.controller:HillaryCtrl
 * @description
 * # HillaryCtrl
 * Controller of the desktopApp
 */

angular.module("desktopApp")
	.controller("HillaryCtrl",["$scope","$http",function ($scope,$http){
		try{
			// #HillaryClinton
			var configProfile2 = {
			  "id" : "763246402600247296",
			  "domId": 'hashtagHillary',
			  "maxTweets": 20,
			  "enableLinks": true, 
			  "showUser": true,
			  "showTime": true,
			  "showImages": false,
			  "lang": 'en'
			};
			twitterFetcher.fetch(configProfile2);

			// Hillary Clinton
			var configProfile3 = {
				"id"	: "763249559233437696",
				"domId": 'searchHillary',
				"maxTweets": 20,
				"enableLinks": true, 
				"showUser": true,
				"showTime": true,
				"showImages": false,
				"lang": 'en'
			}
			twitterFetcher.fetch(configProfile3);

		}catch (Err){
			console.log(Err);
		}
	}]);