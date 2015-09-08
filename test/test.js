'use strict'

var test = require('tape')

test('get dependencies', function (t) {
  var dependents = require('../')

  dependents('express', function (err, deps) {
    t.equal(err, null, 'Error should be null')
    t.true(Array.isArray(deps), 'list of dependents should be an array')
    t.notEqual(deps.length, 0, 'The list should have values')
    t.end()
  })
})
