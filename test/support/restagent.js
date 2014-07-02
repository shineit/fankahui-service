var config = require('../../app.json')
var RestAgent = require('restagent')
RestAgent.config({hostname: config.host, port: config.port, basePath: '/api/'})

before(function (done) {
  if(process.env.NODE_ENV === 'test') {
    var server = require('../../app.js')
    server.start()
    server.on('started', function (baseUrl) {
      done()
    })
  } else {
    done()
  }
})

module.exports = RestAgent
