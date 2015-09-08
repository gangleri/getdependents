'use strict'

var qs = require('querystring')
var http = require('http')

module.exports = function getDependents (name, opts, callback) {
  if (typeof opts === 'function') {
    callback = opts
    opts = {}
  }

  var registry = opts.registry || 'http://registry.npmjs.org'
  registry += '/-/_view/dependedUpon?'
  var query = qs.stringify({
    group_level: 2,
    startkey: '["' + name + '"]',
    endkey: '["' + name + '",{}]'
  })

  var url = registry + query
  http.get(url, function (res) {
    let raw = ''

    res.on('data', function (chunk) {
      raw += chunk
    })

    res.on('end', function () {
      let json = JSON.parse(raw).rows
      let deps = json.map(function (elm) {
        return elm.key[1]
      })
      return callback(null, deps)
    }).on('error', function (err) {
      return callback(err)
    })
  })
}
