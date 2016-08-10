"use strict";

/**
 * @ngdoc function
 * @name desktopApp.controller:DonaldCtrl
 * @description
 * # DonaldCtrl
 * Controller of the desktopApp
 */

angular.module("desktopApp")
	.controller("DonaldCtrl",["$scope","$http",function ($scope,$http){
		try{

			// #DonaldTrump
			var configProfile = {
			  "id" : "763245631607406593",
			  "domId": 'hashtagDonald',
			  "maxTweets": 20,
			  "enableLinks": true, 
			  "showUser": true,
			  "showTime": true,
			  "showImages": false,
			  "lang": 'en'
			};
			twitterFetcher.fetch(configProfile);

			// Donald Trump
			var configProfile1 = {
			  	"id"	: "763248036822720515",
				"domId": 'searchDonald',
				"maxTweets": 20,
				"enableLinks": true, 
				"showUser": true,
				"showTime": true,
				"showImages": false,
				"lang": 'en'
			};
			twitterFetcher.fetch(configProfile1);

		}catch (Err){
			console.log(Err);
		}
	}]);