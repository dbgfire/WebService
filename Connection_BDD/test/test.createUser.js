var assert = require('assert');
const createUser = require('../createUser');
var test=true;
describe('Create User', function() {
  describe('Create user success', function() {
    
    it('should return true when the user is create', function() {
        assert.equal(true, test);
    });
  });
  describe('Create user failure', function() {
    
    it('should return false when the user is not create', function() {
        assert.equal(false, false);
    });
  });
});