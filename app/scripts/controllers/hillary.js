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
			$http.get("/scripts/controllers/token.json").then(function(response){
				var token = response.data;

				var consumerKey = encodeURIComponent(token.consumerKey);
				var consumerSecret = encodeURIComponent(token.consumerSecret);
				var credentials = btoa(consumerKey+":"+consumerSecret);

				try{
					$http({
						method 	: "GET",
						url 	: "https://api.twitter.com/oauth2/token?grant_type=client_credentials",
						headers	: {"Authorization":"Basic "+credentials, "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}
					}).then(function success(response){
						console.log(response);
					}).then(function error(err){
						console.log(err);
					})
				}catch (Err){
					console.log(Err);
				}
			});

			// $http({
			// 	method	: "GET",
			// 	url 	: "https://api.twitter.com/1.1/search/tweets.json?q=@realDonaldTrump&since_id=24012619984051000&max_id=250126199840518145&result_type=mixed&count=4"
			// }).then(function success(response){
			// 	console.log(response);
			// }).then(function error(err){
			// 	console.log(err);
			// });
		}catch (Err){
			console.log(Err);
		}
	}]);