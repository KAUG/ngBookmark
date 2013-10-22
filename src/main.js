/**
* ngBookmark Module
*
* Description
*/
angular.module('ngBookmark', []).
	controller('listCtrl', ['$scope', function ($scope) {
		var bookmarkList = [
			{ title : "google", url:"google.com" },
			{ title : "google1", url:"google.com" },
			{ title : "google2", url:"google.com" },
			{ title : "google3", url:"google.com" },
			{ title : "google4", url:"google.com" },
			{ title : "google5", url:"google.com" },
			{ title : "google6", url:"google.com" },
			{ title : "google7", url:"google.com" },
			{ title : "google8", url:"google.com" }
		];

		chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
     	console.log(bookmarkTreeNodes);
    });

		$scope.bookmarkList = bookmarkList;
		$scope.showDetail = function showDetail (bookmark) {
			console.log(bookmark);
			// body...
		};
	}]);