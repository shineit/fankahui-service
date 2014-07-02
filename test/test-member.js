var qs = require('qs');
var RestAgent = require('./support/restagent')
var Member = new RestAgent('members')


var query = {
 where: {
   price: {gt: 2}
 }
};

describe('Member', function(){
  describe('# POST', function(){
    it('should success create one', function(done){
      done()
    })
  })
  
  describe('# GET', function(){
    it('should success get all', function(done){
      Member.get({}, function (err, res, body) {
        res.statusCode.should.equal(200)
        done()
      })
    })
  })
})