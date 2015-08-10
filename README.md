## Synopsis

This is an implementation of [restlet/httpsnippet](https://github.com/restlet/httpsnippet) browserified and wrapped as an AngularJS Module.

## Code Example

Inject `rHttpSnippet` module into your Angular app, so you'll be able to 
injected the `httpSnippet` factory.

```js
angular.module('myapp', ['rHttpSnippet'])
	.controller('myController', function('httpSnippet') {

		// create the HAR request configuration
		var confHAR = {
			"method": "GET",
        	"url": "http://example.com/v1/contacts/"
		};

		// get a new instance of httpSnippet
		var mySnippet = httpSnippet.getInstance(confHAR);

		// call the httpSnippet or see the API https://github.com/restlet/httpsnippet#api
		var nativeJSSnippet = mySnippet.convert('javascript', 'xmlhttprequest');
	});
```

## Installation

Run `npm install`.

## Build

To build the project just type : `gulp`. The default task will take the `app/src.js`, lint it, browserify it and copy the result into a `dist/restlet-angular-httpsnippet.js` file.

## License

[MIT](LICENSE) © [Restlet](http://www.restlet.com)