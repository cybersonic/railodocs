/**
 * Created by Mark.Drew on 08/12/2014.
 */
var assert = require('assert');
var Version = require('../model/version.js');


describe("Version", function(){
    describe("#list()", function(){
        it('should return list more than 0 versions when called', function(){
            assert.equal(1, Version.list().length);

        });
        it('should return an array', function(){

            assert(typeof Version.list() == "object");
            assert(Version.list().length);
            assert(Version.list() instanceof Array);
        });
    });
    describe("#get()", function(){
        it('I should return a string in the version format of 4 items', function(){
            var current = Version.current();
            assert(Version.current().split(".").length == 4);

        });
    });
});
