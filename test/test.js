var should = require('should');

require('./test-helper.js')
require('../src/app.js');

describe('Angular module', function () {

  
  beforeEach(ngModule('rHttpSnippet'));


  it('should be able to instanciate httpSnippet', inject(function(httpSnippet){
    
    httpSnippet.should.be.an.instanceOf(Object);
    httpSnippet.getInstance.should.be.an.instanceOf(Function);

  }));

  it('should be able to use httpSnippet with restlet snippet', inject(function(httpSnippet){

    // given
    var fixture = {
      "method": "GET",
      "url": "http://mockbin.com/har"
    };

    // when
    var snippetInstance = httpSnippet.getInstance(fixture);
    var snippet = snippetInstance.convert('java','restlet')

    // then
    snippet.should.be.an.instanceOf(String);
    snippet.should.startWith('import org.restlet.resource.*;')

  }));

});
