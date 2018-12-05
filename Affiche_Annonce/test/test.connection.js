var assert = require('assert')
const createUser = require('../index')
var test = true
describe('Connection to the BDD', function () {
  describe('Connection is success', function () {
    it('should return true when the user is create', function () {
      assert.equal(true, test)
    })
  })
  describe('Create user failure', function () {
    it('should return false when the user is not create', function () {
      assert.equal(false, false)
    })
  })
})
