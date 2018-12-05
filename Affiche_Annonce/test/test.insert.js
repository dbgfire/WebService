var assert = require('assert')
const insert = require('../insert')

var valeur = 'Add success'
describe('Request for insert element', function () {
  describe('Insert is success', function () {
    it('should return value "Add success"', function () {
      var res = insert('test', 'test', 'test')
        .then(res => {
          assert.equal(valeur, res)
          return true
        })
        .catch(() => {
          assert.equal(valeur, 'Insert failed')
          return false
        })
      assert.equal(res, true)
    })
  })
})
