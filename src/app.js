(function(window, angular){
	'use strict';

	var HTTPSnippet = require('httpsnippet-fsless');
	
	angular.module('rHttpSnippet', [])
		.factory('httpSnippet', function () {
			return {
				getInstance : function (config) {
					return new HTTPSnippet(config);
				}
			};
		});
})(window, window.angular);